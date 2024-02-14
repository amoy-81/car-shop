import { query } from "@/lib/db"
import { NextResponse } from "next/server"
export async function GET () {
    const result = await  query({
        query : "SELECT * FROM cars",
    })

    return NextResponse.json(result)
}