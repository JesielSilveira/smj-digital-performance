import { db } from "@/lib/mysql"
import { NextResponse } from "next/server"

export async function GET() {
  try {
    const [rows] = await db.query("SELECT * FROM pagamentos ORDER BY created_at DESC")
    return NextResponse.json(rows || [])
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: "Erro ao buscar pagamentos" }, { status: 500 })
  }
}