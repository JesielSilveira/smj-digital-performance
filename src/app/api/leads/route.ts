import { NextResponse } from "next/server";
import { Prisma } from "@prisma/client";
import db from "@/lib/mysql";

// 🟢 GET → lista todos os leads
export async function GET() {
  try {
    const [rows] = await db.query("SELECT * FROM leads ORDER BY created_at DESC");
    return NextResponse.json(rows);
  } catch (error) {
    console.error("Erro ao buscar leads:", error);
    return NextResponse.json({ error: "Erro ao buscar leads" }, { status: 500 });
  }
}

// 🟢 POST → cria um novo lead
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone } = body;

    if (!name || !email || !phone) {
      return NextResponse.json({ error: "Nome e email são obrigatórios" }, { status: 400 });
    }

    const [result] = await db.execute(
      "INSERT INTO leads (name, email, phone) VALUES (?, ?, ?, ?)",
      [name, email, phone || null]
    );

    return NextResponse.json(
      { success: true, id: (result as any).insertId },
      { status: 201 }
    );
  } catch (error) {
    console.error("Erro ao criar lead:", error);
    return NextResponse.json({ error: "Erro no servidor" }, { status: 500 });
  }
}
