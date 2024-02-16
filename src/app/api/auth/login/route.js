import { query } from "@/lib/db";
import { getUserByUsername } from "@/services/auth.service";
import { signToken } from "@/utils/auth.utils";
import bcrypt from "bcrypt";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req) {
  const rawFormData = await req.json();

  const usernameSearchResult = await getUserByUsername(rawFormData.username);
  if (usernameSearchResult.length == 0)
    return NextResponse.json(
      { message: "کاربر یافت نشد", success: false },
      { status: 404 }
    );

  if (
    !(await bcrypt.compare(
      rawFormData.password,
      usernameSearchResult[0].password
    ))
  )
    return NextResponse.json(
      { message: "رمز عبور نادرست می باشد", success: false },
      { status: 401 }
    );

  const token = signToken({ id: usernameSearchResult[0].id }, "1d");
  cookies().set("accessToken", token);

  return NextResponse.json(
    {
      success: true,
      user: {
        name: usernameSearchResult[0].name,
        username: usernameSearchResult[0].username,
      },
      token,
    },
    { status: 200 }
  );
}
