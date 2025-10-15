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
export async function POST(req: Request) {
  try {
    const { name, email, phone } = await req.json();
    console.log("Dados recebidos:", { name, email, phone });

    const query = "INSERT INTO leads (name, email, phone) VALUES (?, ?, ?)";
    console.log("Query:", query);

    const [result] = await db.execute(query, [name, email, phone || null]);
    console.log("Resultado do insert:", result);

    return NextResponse.json({ success: true, id: (result as any).insertId }, { status: 201 });
  } catch (err: any) {
    console.error("Erro ao criar lead:", err);
    return NextResponse.json({
      error: err.message,
      code: err.code,
      errno: err.errno,
      sqlMessage: err.sqlMessage,
    }, { status: 500 });
  }
}

