import { query } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const result = await query({
    query: `
            SELECT c.id , u.name , c.comment
            FROM comments c
            JOIN users u
                ON c.user_id = u.id
            JOIN cars ca
                ON c.car_id = ca.id
            WHERE c.car_id = ?
        `,
    values: [params.requestId],
  });
  return NextResponse.json(result);
}
