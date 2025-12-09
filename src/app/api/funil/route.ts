import { NextResponse } from "next/server";
import db from "@/lib/mysql";

// GET – listar leads do funil
export async function GET() {
  try {
    const [rows] = await db.query("SELECT * FROM leads_funnel ORDER BY created_at DESC");
    return NextResponse.json(rows);
  } catch (err) {
    console.error("Erro ao buscar leads do funil:", err);
    return NextResponse.json({ error: "Erro ao buscar leads" }, { status: 500 });
  }
}

// POST – receber e salvar lead do funil
export async function POST(request: Request) {
  try {
    const body = await request.json();

    // FRONT ENVIA ISTO:
    const {
      problema,
      objetivo,
      contato = {},
      origin
    } = body;

    const name = contato.nome;
    const email = contato.email;
    const phone = contato.whatsapp;

    // validação mínima
    if (!name || !email) {
      return NextResponse.json(
        { error: "Nome e e-mail são obrigatórios" },
        { status: 400 }
      );
    }

    const [result] = await db.execute(
      "INSERT INTO leads_funnel (name, email, phone, problema, objetivo, origin) VALUES (?, ?, ?, ?, ?, ?)",
      [name, email, phone ?? null, problema ?? null, objetivo ?? null, origin ?? null]
    );

    return NextResponse.json(
      { success: true, id: (result as any).insertId },
      { status: 201 }
    );

  } catch (err) {
    console.error("Erro ao salvar lead do funil:", err);
    return NextResponse.json({ error: "Erro interno no servidor" }, { status: 500 });
  }
}
