import { headers } from "next/headers";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";
import { query } from "@/lib/db";
import { getUserById } from "@/services/auth.service";

export async function GET(req) {
  const user = await auth();

  if (!user)
    return NextResponse.json(
      { message: "وارد حساب شوید", success: false },
      { status: 401 }
    );

  const userOrders = await query({
    query: `
            SELECT o.id, c.name, c.description, o.status, c.image , o.created_at , o.updated_at
            FROM orders o
            JOIN cars c
                ON c.id = o.car_id
            WHERE o.user_id = ?
        `,
    values: [user?.id],
  });

  return NextResponse.json(userOrders);
}

export async function POST(req) {
  try {
    const body = await req.json();

    const user = await auth();

    if (!user)
      return NextResponse.json(
        { message: "وارد حساب شوید", success: false },
        { status: 401 }
      );

    const newOrder = await query({
      query: `
          INSERT orders (user_id, car_id) VALUE (? , ?)
      `,
      values: [user?.id, body?.car_id],
    });

    if (newOrder[0]?.success === false)
      return NextResponse.json(
        { success: false, message: newOrder[0]?.message },
        { status: 500 }
      );

    return NextResponse.json(
      { success: true, message: "سفارش شما ثبت شد" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "خطا در برقراری ارتباط" },
      { status: 500 }
    );
  }
}

async function auth() {
  const headersList = headers();
  const token = headersList.get("Authorization");

  if (!token) return null;

  const user = await whoAmI(token);

  if (!user) return null;

  return user;
}

async function whoAmI(token) {
  try {
    const userId = jwt.verify(token, process.env.JWT_KEY);

    if (typeof userId === "object" && "id" in userId) {
      const userDatas = await getUserById(userId.id);

      if (userDatas.length == 0) return null;

      return {
        id: userDatas[0].id,
        name: userDatas[0].name,
        username: userDatas[0].username,
      };
    }
  } catch (error) {
    return null;
  }
}
