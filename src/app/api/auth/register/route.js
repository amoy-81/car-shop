import { query } from "@/lib/db";
import { getUserByUsername } from "@/services/auth.service";
import { signToken } from "@/utils/auth.utils";
import bcrypt from "bcrypt";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req) {
  const rawFormData = await req.json();

  const usernameSearchResult = await getUserByUsername(rawFormData.username);

  if (usernameSearchResult.length > 0)
    return NextResponse.json(
      {
        success: false,
        message: "کاربر دیگری با این نام کاربری وجود دارد",
      },
      { status: 409 }
    );

  const passwordHashed = bcrypt.hashSync(rawFormData.password, 10);

  const createUserQuery = await query({
    query: "INSERT INTO users (name , username, password) VALUES (?,?,?)",
    values: [rawFormData.name, rawFormData.username, passwordHashed],
  });

  if (createUserQuery[0]?.success === false) {
    return NextResponse.json(
      {
        success: false,
        message: createUserQuery[0]?.message,
      },
      { status: 500 }
    );
  }

  const userId = createUserQuery.insertId;
  const token = signToken({ id: userId }, "1d");

  cookies().set("accessToken", token);

  return NextResponse.json(
    {
      success: true,
      message: "user create successfully",
      token,
    },
    { status: 201 }
  );
}
