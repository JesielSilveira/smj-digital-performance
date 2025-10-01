"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export function FormLeads() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState("")
  const [error, setError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
        setSuccess("LOGO RETORNAREMOS COM AJUDA! 🎉")
        setFormData({ name: "", email: "", phone: "", message: "" })
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
        <h2 className="text-3xl font-bold text-center mb-6">Fale Conosco</h2>
        <p className="text-muted-foreground text-center mb-8">
          Preencha o formulário abaixo e nossa equipe entrará em contato.
        </p>

        {success && <p className="text-green-600 mb-4 font-semibold">{success}</p>}
        {error && <p className="text-red-600 mb-4 font-semibold">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input type="text" name="name" placeholder="Nome*" value={formData.name} onChange={handleChange} required />
          <Input type="email" name="email" placeholder="Email*" value={formData.email} onChange={handleChange} required />
          <Input type="tel" name="phone" placeholder="Telefone" value={formData.phone} onChange={handleChange} />
          <Textarea name="message" placeholder="Mensagem" value={formData.message} onChange={handleChange} rows={4} />
          <Button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white" disabled={loading}>
            {loading ? "Enviando..." : "Enviar"}
          </Button>
        </form>
      </div>
    </section>
  )
}
