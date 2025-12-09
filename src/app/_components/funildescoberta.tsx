"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export function FunilDescoberta() {
  const [step, setStep] = useState(1)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const [answers, setAnswers] = useState({
    problema: "",
    problemaTexto: "",
    objetivo: "",
    objetivoTexto: "",
    contato: { nome: "", email: "", whatsapp: "" }
  })

  async function enviarLead() {
    setLoading(true)

    const problemaFinal = answers.problemaTexto || answers.problema
    const objetivoFinal = answers.objetivoTexto || answers.objetivo

    try {
      const res = await fetch("/api/funil", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          problema: problemaFinal,
          objetivo: objetivoFinal,
          contato: {
            nome: answers.contato.nome,
            email: answers.contato.email,
            whatsapp: answers.contato.whatsapp
          },
          origin: "funil-descoberta"
        })
      })

      if (!res.ok) throw new Error("Erro ao enviar")

      setSuccess(true)
    } catch (err) {
      alert("Erro ao enviar o diagnóstico. Tente novamente.")
    }

    setLoading(false)
  }

  function handleNext() {
    setStep(step + 1)
  }

  return (
    <section className="bg-blue-900 text-white py-24" id="diagnostico">
      <div className="max-w-3xl mx-auto px-6 text-center">

        {/* SUCESSO */}
        {success && (
          <div className="bg-white text-blue-900 p-10 rounded-2xl shadow-xl">
            <h2 className="text-3xl font-bold">Diagnóstico enviado! 🎉</h2>
            <p className="mt-4 text-lg">
              Em breve entraremos em contato com você com sugestões personalizadas.
            </p>
          </div>
        )}

        {!success && (
          <>
            <h2 className="text-4xl font-extrabold" data-aos="fade-up">
              Não sabe exatamente o que sua empresa precisa?
            </h2>
            <p className="text-lg mt-4 opacity-90">
              Responda algumas perguntas rápidas e diremos qual solução pode gerar mais resultados.
            </p>

            {/* ETAPA 1 */}
            {step === 1 && (
              <div className="mt-12 bg-white text-blue-900 p-8 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-bold mb-6">
                  Qual situação mais parece com você?
                </h3>

                <div className="grid gap-6">
                  {[
                    "Minha empresa perde tempo com tarefas manuais.",
                    "Quero crescer, mas meus processos não acompanham.",
                    "Quero criar algo digital, mas não sei por onde começar."
                  ].map((item, i) => (
                    <label
                      key={i}
                      className="flex items-start gap-3 p-4 border rounded-xl cursor-pointer hover:bg-blue-50 transition"
                    >
                      <input
                        type="radio"
                        name="problema"
                        value={item}
                        className="mt-1"
                        checked={answers.problema === item}
                        onChange={(e) =>
                          setAnswers({ ...answers, problema: e.target.value, problemaTexto: "" })
                        }
                      />
                      <span>{item}</span>
                    </label>
                  ))}

                  {/* TEXTO LIVRE */}
                  <textarea
                    placeholder="Não encontrou algo similar? Descreva como é seu dia a dia aqui..."
                    className="p-4 border rounded-lg w-full mt-2"
                    rows={3}
                    value={answers.problemaTexto}
                    onChange={(e) =>
                      setAnswers({
                        ...answers,
                        problemaTexto: e.target.value,
                        problema: "" // limpa radio
                      })
                    }
                  />
                </div>

                <Button
                  onClick={handleNext}
                  disabled={!answers.problema && !answers.problemaTexto}
                  className="mt-6 w-full bg-blue-900 hover:bg-blue-800 text-white"
                >
                  Próximo
                </Button>
              </div>
            )}

            {/* ETAPA 2 */}
            {step === 2 && (
              <div className="mt-12 bg-white text-blue-900 p-8 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-bold mb-6">E qual é seu principal objetivo?</h3>

                <div className="grid gap-6">
                  {[
                    "Automatizar processos e reduzir custos",
                    "Atrair mais clientes com tecnologia",
                    "Criar meu próprio sistema / SaaS"
                  ].map((item, i) => (
                    <label
                      key={i}
                      className="flex items-start gap-3 p-4 border rounded-xl cursor-pointer hover:bg-blue-50 transition"
                    >
                      <input
                        type="radio"
                        name="objetivo"
                        value={item}
                        className="mt-1"
                        checked={answers.objetivo === item}
                        onChange={(e) =>
                          setAnswers({ ...answers, objetivo: e.target.value, objetivoTexto: "" })
                        }
                      />
                      <span>{item}</span>
                    </label>
                  ))}

                  {/* TEXTO LIVRE */}
                  <textarea
                    placeholder="Tem outro objetivo? Conte aqui... Se ainda não sabe escreva aqui também"
                    className="p-4 border rounded-lg w-full mt-2"
                    rows={3}
                    value={answers.objetivoTexto}
                    onChange={(e) =>
                      setAnswers({
                        ...answers,
                        objetivoTexto: e.target.value,
                        objetivo: "" // limpa radio
                      })
                    }
                  />
                </div>

                <Button
                  onClick={handleNext}
                  disabled={!answers.objetivo && !answers.objetivoTexto}
                  className="mt-6 w-full bg-blue-900 hover:bg-blue-800 text-white"
                >
                  Avançar
                </Button>
              </div>
            )}

            {/* ETAPA 3 */}
            {step === 3 && (
              <div className="mt-12 bg-white text-blue-900 p-8 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-bold">Último passo! 🎯</h3>
                <p className="mt-2 text-gray-600">
                  Envie seus dados e enviaremos o diagnóstico gratuito.
                </p>

                <div className="grid gap-4 mt-8 text-left">
                  <input
                    type="text"
                    placeholder="Seu nome"
                    className="p-3 border rounded-lg"
                    onChange={(e) =>
                      setAnswers({
                        ...answers,
                        contato: { ...answers.contato, nome: e.target.value }
                      })
                    }
                  />
                  <input
                    type="email"
                    placeholder="Seu melhor e-mail"
                    className="p-3 border rounded-lg"
                    onChange={(e) =>
                      setAnswers({
                        ...answers,
                        contato: { ...answers.contato, email: e.target.value }
                      })
                    }
                  />
                  <input
                    type="text"
                    placeholder="WhatsApp"
                    className="p-3 border rounded-lg"
                    onChange={(e) =>
                      setAnswers({
                        ...answers,
                        contato: { ...answers.contato, whatsapp: e.target.value }
                      })
                    }
                  />
                </div>

                <Button
                  className="mt-6 w-full bg-blue-900 hover:bg-blue-800 text-white"
                  disabled={
                    !answers.contato.nome ||
                    !answers.contato.email ||
                    !answers.contato.whatsapp ||
                    loading
                  }
                  onClick={enviarLead}
                >
                  {loading ? "Enviando..." : "Receber Diagnóstico Gratuito"}
                </Button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  )
}
