import { db } from "@/lib/mysql";

export async function GET() {
  const [rows] = await db.query("SELECT 1+1 AS resultado");
  return new Response(JSON.stringify(rows), { status: 200 });
}