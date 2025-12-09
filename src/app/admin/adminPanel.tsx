"use client"

import { useEffect, useState } from "react"

export function AdminPanel() {
  const [leads, setLeads] = useState<any[]>([])
  const [funnelLeads, setFunnelLeads] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        // → LEADS NORMAIS
        const resLeads = await fetch("/api/leads")
        const jsonLeads = await resLeads.json().catch(() => [])

        const leadsArray = Array.isArray(jsonLeads)
          ? jsonLeads
          : Array.isArray(jsonLeads.data)
          ? jsonLeads.data
          : []

        setLeads(leadsArray)

        // → LEADS DO FUNIL
        const resFunnel = await fetch("/api/funil")
        const jsonFunnel = await resFunnel.json().catch(() => [])

        const funnelArray = Array.isArray(jsonFunnel)
          ? jsonFunnel
          : Array.isArray(jsonFunnel.data)
          ? jsonFunnel.data
          : []

        setFunnelLeads(funnelArray)

      } catch (err) {
        console.error("Erro ao puxar dados:", err)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) return <p className="text-center mt-10 text-lg">Carregando...</p>

  return (
    <div className="container mx-auto py-10">

      {/* LEADS NORMAL */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Leads</h2>

        {leads.length === 0 ? (
          <p className="text-gray-600">Nenhum lead encontrado.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border text-sm bg-white shadow rounded-lg">
              <thead className="bg-gray-200 text-gray-800 font-semibold">
                <tr>
                  <th className="border p-3">ID</th>
                  <th className="border p-3">Nome</th>
                  <th className="border p-3">Email</th>
                  <th className="border p-3">Telefone</th>
                  <th className="border p-3">Criado em</th>
                </tr>
              </thead>

              <tbody>
                {leads.map((lead) => (
                  <tr key={lead.id} className="hover:bg-gray-50">
                    <td className="border p-3 text-center">{lead.id}</td>
                    <td className="border p-3">{lead.name}</td>
                    <td className="border p-3">{lead.email}</td>
                    <td className="border p-3">{lead.phone}</td>
                    <td className="border p-3">{lead.created_at}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      {/* LEADS DO FUNIL */}
      <section>
        <h2 className="text-3xl font-bold mb-6">Leads do Funil</h2>

        {funnelLeads.length === 0 ? (
          <p className="text-gray-600">Nenhum lead do funil encontrado.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border text-sm bg-white shadow rounded-lg">
              <thead className="bg-gray-200 text-gray-800 font-semibold">
                <tr>
                  <th className="border p-3">ID</th>
                  <th className="border p-3">Nome</th>
                  <th className="border p-3">Email</th>
                  <th className="border p-3">Telefone</th>
                  <th className="border p-3">Problema</th>
                  <th className="border p-3">Objetivo</th>
                  <th className="border p-3">Origem</th>
                  <th className="border p-3">Criado em</th>
                </tr>
              </thead>

              <tbody>
                {funnelLeads.map((lead) => (
                  <tr key={lead.id} className="hover:bg-gray-50">
                    <td className="border p-3 text-center">{lead.id}</td>
                    <td className="border p-3">{lead.name}</td>
                    <td className="border p-3">{lead.email}</td>
                    <td className="border p-3">{lead.phone}</td>
                    <td className="border p-3">{lead.problema}</td>
                    <td className="border p-3">{lead.objetivo}</td>
                    <td className="border p-3">{lead.origin}</td>
                    <td className="border p-3">{lead.created_at}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

    </div>
  )
}
