import { NextResponse } from "next/server";
import db from "@/lib/mysql";

// GET – lista os pagamentos
export async function GET() {
  try {
    const [rows] = await db.execute(
      "SELECT * FROM pagamentos ORDER BY created_at DESC"
    );

    return NextResponse.json(rows);
  } catch (error) {
    console.error("Erro ao buscar pagamentos:", error);
    return NextResponse.json({ error: "Erro ao buscar pagamentos" }, { status: 500 });
  }
}

// POST – cria um pagamento
export async function POST(req: Request) {
  try {
    const { lead_id, plano, status, valor, telefone_cliente } = await req.json();

    const [result] = await db.execute(
      "INSERT INTO pagamentos (lead_id, plano, status, valor, telefone_cliente) VALUES (?, ?, ?, ?, ?)",
      [lead_id, plano, status, valor, telefone_cliente]
    );

    return NextResponse.json(
      {
        id: (result as any).insertId,
        lead_id,
        plano,
        status,
        valor,
        telefone_cliente,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Erro ao criar pagamento:", error);
    return NextResponse.json({ error: "Erro ao criar pagamento" }, { status: 500 });
  }
}
