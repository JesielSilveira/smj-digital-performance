"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export function FormLeads() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState("")
  const [error, setError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setSuccess("")
    setError("")

    if (!formData.name || !formData.email) {
      setError("Nome e email são obrigatórios")
      setLoading(false)
      return
    }

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      let data: any = {}
      try { data = await res.json() } catch { data = { error: "Resposta inválida do servidor" } }

      if (res.ok) {
        setSuccess("🎉 Parabéns! Você garantiu seu desconto de até 15%! Em breve entraremos em contato.")
        setFormData({ name: "", email: "", phone: "" })
      } else {
        setError(data.error || "Erro desconhecido")
      }
    } catch (err) {
      console.error(err)
      setError("Erro de conexão com o servidor")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="container mx-auto py-20">
      <div className="max-w-lg mx-auto shadow-lg rounded-2xl p-8 bg-white">
        <h2 className="text-3xl font-bold text-center mb-4">
          Ganhe até <span className="text-green-500">15% de desconto</span> nas 3 primeiras compras!
        </h2>
        <p className="text-gray-600 text-center mb-8">
          Preencha seus dados abaixo e receba seu cupom exclusivo agora mesmo.
        </p>

        {success && <p className="text-green-600 mb-4 font-semibold">{success}</p>}
        {error && <p className="text-red-600 mb-4 font-semibold">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="text"
            name="name"
            placeholder="Seu nome*"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <Input
            type="email"
            name="email"
            placeholder="Seu melhor email*"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <Input
            type="tel"
            name="phone"
            placeholder="Telefone (opcional)"
            value={formData.phone}
            onChange={handleChange}
          />
          <Button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold"
            disabled={loading}
          >
            {loading ? "Enviando..." : "Quero meu desconto!"}
          </Button>
        </form>
      </div>
    </section>
  )
}
