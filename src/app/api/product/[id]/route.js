import { query } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const result = await query({
    query: `
        SELECT * FROM cars WHERE id = ?;
    `,
    values: [params.id],
  });

  return NextResponse.json(result);
}
