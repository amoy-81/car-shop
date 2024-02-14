import { query } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  const result = await query({
    query: `
        SELECT * 
        FROM cars 
        ORDER BY id DESC 
        LIMIT 0,3
        `,
  });

  return NextResponse.json(result);
}
