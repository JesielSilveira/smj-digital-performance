"use client"

import { Gift, CreditCard } from "lucide-react"

export function PromoBar() {
  return (
    <div className="w-full bg-blue-900 text-white text-sm py-2 border-b border-blue-800">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-center gap-1 md:gap-0">
        <div className="flex items-center gap-2" data-aos="fade-right">
          <CreditCard size={16} className="text-yellow-400" />
          <p>
            <strong>Parcele em até 18x</strong> no cartão de crédito
          </p>
        </div>

        <div className="hidden md:block h-4 w-px bg-blue-700" />

        <div className="flex items-center gap-2" data-aos="fade-left">
          <Gift size={16} className="text-yellow-400" />
          <p>
            <strong>Ganhe até 15% de desconto</strong> no seu primeiro pedido!
          </p>
        </div>
      </div>
    </div>
  )
}
