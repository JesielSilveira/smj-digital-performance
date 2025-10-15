import { NextResponse } from "next/server";
import db from "@/lib/mysql";

export async function GET() {
  try {
    const [rows] = await db.query("SHOW TABLES");
    return NextResponse.json(rows);
  } catch (err: any) {
    console.error("Erro MySQL:", err.message);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
