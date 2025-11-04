"use client"

import { useEffect, useState } from "react"

export function AdminPanel() {
  const [leads, setLeads] = useState<any[]>([])
  const [pagamentos, setPagamentos] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Busca leads
        const leadsRes = await fetch("/api/leads")
        const leadsJson = await leadsRes.json().catch(() => [])
        const leadsArray = Array.isArray(leadsJson)
          ? leadsJson
          : Array.isArray(leadsJson.data)
          ? leadsJson.data
          : []

        setLeads(leadsArray)

        // Busca pagamentos
        const pagRes = await fetch("/api/pagamentos")
        const pagJson = await pagRes.json().catch(() => [])
        const pagArray = Array.isArray(pagJson)
          ? pagJson
          : Array.isArray(pagJson.data)
          ? pagJson.data
          : []

        setPagamentos(pagArray)
      } catch (err) {
        console.error("Erro ao buscar dados:", err)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) return <p className="text-center mt-10">Carregando...</p>

  return (
    <div className="container mx-auto py-10 space-y-10">
      {/* LEADS */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Leads</h2>
        {leads.length === 0 ? (
          <p>Nenhum lead encontrado.</p>
        ) : (
          <table className="w-full border-collapse border text-sm">
            <thead>
              <tr>
                <th className="border p-2">ID</th>
                <th className="border p-2">Nome</th>
                <th className="border p-2">Email</th>
                <th className="border p-2">Telefone</th>
                <th className="border p-2">Criado em</th>
              </tr>
            </thead>
            <tbody>
              {leads.map((lead) => (
                <tr key={lead.id}>
                  <td className="border p-2">{lead.id}</td>
                  <td className="border p-2">{lead.name}</td>
                  <td className="border p-2">{lead.email}</td>
                  <td className="border p-2">{lead.phone}</td>
                  <td className="border p-2">{lead.created_at}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>

      {/* PAGAMENTOS */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Pagamentos</h2>
        {pagamentos.length === 0 ? (
          <p>Nenhum pagamento encontrado.</p>
        ) : (
          <table className="w-full border-collapse border text-sm">
            <thead>
              <tr>
                <th className="border p-2">ID</th>
                <th className="border p-2">Lead ID</th>
                <th className="border p-2">Plano</th>
                <th className="border p-2">Status</th>
                <th className="border p-2">Valor</th>
                <th className="border p-2">Telefone Cliente</th>
                <th className="border p-2">Criado em</th>
              </tr>
            </thead>
            <tbody>
              {pagamentos.map((p) => (
                <tr key={p.id}>
                  <td className="border p-2">{p.id}</td>
                  <td className="border p-2">{p.lead_id}</td>
                  <td className="border p-2">{p.plano}</td>
                  <td className="border p-2">{p.status}</td>
                  <td className="border p-2">R$ {p.valor}</td>
                  <td className="border p-2">{p.telefone_cliente}</td>
                  <td className="border p-2">{p.created_at}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>
    </div>
  )
}
