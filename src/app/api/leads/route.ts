import { NextResponse } from "next/server";
import db from "@/lib/mysql";

// GET: Listar leads
export async function GET() {
  try {
    const [rows] = await db.query("SELECT * FROM leads ORDER BY created_at DESC");
    return NextResponse.json(rows);
  } catch (err) {
    console.error("Erro ao buscar leads:", err);
    return NextResponse.json({ error: "Erro ao buscar leads" }, { status: 500 });
  }
}

// POST: Criar novo lead
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone } = body;

    if (!name || !email) {
      return NextResponse.json({ error: "Nome e email são obrigatórios" }, { status: 400 });
    }

    const [result] = await db.execute(
      "INSERT INTO leads (name,email,phone) VALUES (?,?,?)",
      [name,email,phone]
    );

    return NextResponse.json({ success: true, id: (result as any).insertId }, { status: 201 });
  } catch (err) {
    console.error("Erro ao criar lead:", err);
    return NextResponse.json({ error: "Erro no servidor" }, { status: 500 });
  }
}

