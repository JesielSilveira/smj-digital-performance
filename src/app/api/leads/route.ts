import { db } from "@/lib/mysql"
import { NextResponse } from "next/server"

export async function GET() {
  try {
    const [rows] = await db.query("SELECT * FROM leads ORDER BY created_at DESC")
    return NextResponse.json(rows || [])
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: "Erro ao buscar leads" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, message } = body

    if (!name || !email) {
      return NextResponse.json({ error: "Nome e email são obrigatórios" }, { status: 400 })
    }

    const [result] = await db.execute(
      "INSERT INTO leads (name, email, phone, message) VALUES (?, ?, ?, ?)",
      [name, email, phone, message]
    )

    return NextResponse.json({ success: true, id: (result as any).insertId }, { status: 201 })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: "Erro no servidor" }, { status: 500 })
  }}