import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const pagamentos = await prisma.pagamento.findMany({
    orderBy: { created_at: "desc" }
  });

  return NextResponse.json(pagamentos);
}

export async function POST(req: Request) {
  const { lead_id, plano, status, valor, telefone_cliente } = await req.json();

  const pagamento = await prisma.pagamento.create({
    data: { lead_id, plano, status, valor, telefone_cliente }
  });

  return NextResponse.json(pagamento, { status: 201 });
}
