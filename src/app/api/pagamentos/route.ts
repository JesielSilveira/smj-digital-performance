import { NextResponse } from "next/server";
import db from "@/lib/mysql";

// GET: Listar pagamentos
export async function GET() {
  try {
    const [rows] = await db.query("SELECT * FROM pagamentos ORDER BY created_at DESC");
    return NextResponse.json(rows);
  } catch (err) {
    console.error("Erro ao buscar pagamentos:", err);
    return NextResponse.json({ error: "Erro ao buscar pagamentos" }, { status: 500 });
  }
}

// POST: Criar pagamento
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { lead_id, plano, status, valor, telefone_cliente } = body;

    if (!lead_id || !plano || !status || !valor) {
      return NextResponse.json({ error: "Campos obrigatórios ausentes" }, { status: 400 });
    }

    const [result] = await db.execute(
      "INSERT INTO pagamentos (lead_id, plano, status, valor, telefone_cliente) VALUES (?,?,?,?,?)",
      [lead_id, plano, status, valor, telefone_cliente || null]
    );

    return NextResponse.json({ success: true, id: (result as any).insertId }, { status: 201 });
  } catch (err) {
    console.error("Erro ao criar pagamento:", err);
    return NextResponse.json({ error: "Erro no servidor" }, { status: 500 });
  }
}
