import { query } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req) {
  const body = await req.json();

  try {
    const products = await query({
      query: `
            SELECT * 
            FROM cars
            WHERE name LIKE '%${body.string}%'
        `,
    });

    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "خطا در جستو جو" },
      { status: 500 }
    );
  }
}
