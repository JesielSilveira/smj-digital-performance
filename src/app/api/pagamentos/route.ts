import { NextResponse } from "next/server";
import db from "@/lib/mysql";

// 🟢 GET → lista todos os pagamentos
export async function GET() {
  try {
    const [rows] = await db.query(`
      SELECT p.*, l.name AS lead_name, l.email AS lead_email 
      FROM pagamentos p
      LEFT JOIN leads l ON p.lead_id = l.id
      ORDER BY p.created_at DESC
    `);
    return NextResponse.json(rows);
  } catch (error) {
    console.error("Erro ao buscar pagamentos:", error);
    return NextResponse.json({ error: "Erro ao buscar pagamentos" }, { status: 500 });
  }
}

// 🟢 POST → cria um novo pagamento
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { lead_id, plano, status, valor, telefone_cliente } = body;

    if (!plano || !status || !valor) {
      return NextResponse.json({ error: "Campos obrigatórios ausentes" }, { status: 400 });
    }

    const [result] = await db.execute(
      "INSERT INTO pagamentos (lead_id, plano, status, valor, telefone_cliente) VALUES (?, ?, ?, ?, ?)",
      [lead_id || null, plano, status, valor, telefone_cliente || null]
    );

    return NextResponse.json(
      { success: true, id: (result as any).insertId },
      { status: 201 }
    );
  } catch (error) {
    console.error("Erro ao criar pagamento:", error);
    return NextResponse.json({ error: "Erro no servidor" }, { status: 500 });
  }
}
