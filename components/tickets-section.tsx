"use client"

import { useState } from "react"

const TICKETS = [
  {
    name: "LIGHT",
    price: "R$ 797,00",
    lote2: "R$ 997,00",
    lote3: "R$ 1.197,00",
    checkoutUrl: "#",
    type: "standard" as const,
    items: [
      "Passaporte dia 1 e 2 do evento",
      "Caneta Corretor Vencedor",
      "Bloco de anotações GIGANTES",
      "Material dos patrocinadores",
      "Água durante todo o evento",
      "Água quente para chá ou chimarrão durante todo o evento",
      "Tote Bag personalizada do evento",
      "Café durante todo o evento",
      "Biscoitos durante todo o evento",
      "Pasta Corretor Vencedor",
      "CADEIRAS atrás do passaporte PREMIUM",
    ],
  },
  {
    name: "PREMIUM",
    price: "R$ 997,00",
    lote2: "R$ 1.297,00",
    lote3: "R$ 1.597,00",
    checkoutUrl: "#",
    type: "standard" as const,
    items: [
      "Passaporte dia 1 e 2 do evento",
      "Caneta Corretor Vencedor",
      "Bloco de anotações GIGANTES",
      "Material dos patrocinadores",
      "Água durante todo o evento",
      "Água quente para chá ou chimarrão durante todo o evento",
      "Tote Bag personalizada do evento",
      "Café durante todo o evento",
      "Biscoitos durante todo o evento",
      "Pasta Corretor Vencedor",
      "MESAS EM FRENTE AO PALCO",
      "Participação no grupo exclusivo do Whats do Gigantes 2026",
      "Apostila do evento inclusa",
    ],
  },
  {
    name: "EXPERIÊNCIA\nALTO PADRÃO",
    price: "R$ 3.997,00",
    lote2: "R$ 4.997,00",
    lote3: "R$ 5.997,00",
    checkoutUrl: "#",
    type: "premium" as const,
    items: [
      "Passaporte dia 1 e 2 do evento",
      "Caneta Corretor Vencedor",
      "Bloco de anotações GIGANTES",
      "Material dos patrocinadores",
      "Água durante todo o evento",
      "Água quente para chá ou chimarrão durante todo o evento",
      "Tote Bag personalizada do evento",
      "Café durante todo o evento",
      "Biscoitos durante todo o evento",
      "Pasta Corretor Vencedor",
      "MESAS EM FRENTE AO PALCO",
      "Participação no grupo exclusivo do Whats do Gigantes 2026",
      "Apostila do evento inclusa",
      "Mouse Pad Corretor Vencedor",
      "Squeeze Corretor Vencedor",
      "Livro ATA Corretor Vencedor",
      "Boné Gigantes do Mercado Imobiliário",
      "Acesso ao Lounge Vip com Coffee Break Gourmet os 2 dias do evento",
      "Garçom durante os dois dias do evento",
      "Credenciamento sem fila",
      "Caneca Corretor Vencedor",
      "MAIS o terceiro dia da Experiência Alto Padrão: um dia All Inclusive (bebidas zero álcool) em uma imersão com a mentoria: Como Ler Pessoas em 10 Minutos e conduzir ao Fechamento",
    ],
  },
]

type Ticket = (typeof TICKETS)[number]

function PassportModal({
  ticket,
  onClose,
}: {
  ticket: Ticket
  onClose: () => void
}) {
  const [form, setForm] = useState({ nome: "", whatsapp: "", email: "" })
  const [loading, setLoading] = useState(false)

  const isPremium = ticket.type === "premium"
  const isMid = ticket.name === "PREMIUM"

  const accentColor = isPremium ? "#D4A843" : isMid ? "#D4A843" : "rgba(255,255,255,0.7)"
  const accentBg = isPremium
    ? "linear-gradient(135deg, #D4A843 0%, #f5d680 50%, #D4A843 100%)"
    : isMid
      ? "linear-gradient(135deg, #c49b30 0%, #D4A843 50%, #c49b30 100%)"
      : "linear-gradient(135deg, #1e3a5f 0%, #2a4d7a 50%, #1e3a5f 100%)"

  const planLabel = isPremium
    ? "EXPERIÊNCIA ALTO PADRÃO"
    : isMid
      ? "PREMIUM"
      : "LIGHT"

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Fire-and-forget — a falha no SellFlux nunca bloqueia o checkout
    try {
      await fetch("/api/capture-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nome: form.nome,
          email: form.email,
          whatsapp: form.whatsapp,
          plano: ticket.name,
        }),
      })
    } catch {
      // silently swallow — o redirecionamento ocorre de qualquer forma
    }

    window.location.href = ticket.checkoutUrl
  }

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/75 backdrop-blur-sm" />

      <div
        className="relative w-full max-w-[420px] rounded-2xl overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.6)]"
        style={{ background: "#0c1625", border: `1px solid ${isPremium ? "rgba(212,168,67,0.4)" : isMid ? "rgba(212,168,67,0.25)" : "rgba(255,255,255,0.1)"}` }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Accent header */}
        <div
          className="px-6 py-5 flex items-center justify-between"
          style={{ background: accentBg }}
        >
          <div>
            <p className="text-[10px] font-bold tracking-[0.2em] uppercase opacity-70" style={{ color: isPremium || isMid ? "#0a1628" : "#fff" }}>
              Passaporte
            </p>
            <p
              className="font-black text-lg leading-tight tracking-wide"
              style={{ color: isPremium || isMid ? "#0a1628" : "#fff" }}
            >
              {planLabel}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            disabled={loading}
            className="rounded-full p-1 transition-opacity hover:opacity-70"
            style={{ color: isPremium || isMid ? "#0a1628" : "#fff" }}
          >
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* Form */}
        <div className="px-6 py-7 relative">
          {loading && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#0c1625]/95 z-10 rounded-b-2xl">
              <div
                className="w-12 h-12 rounded-full border-[3px] border-transparent mb-4"
                style={{
                  borderTopColor: isPremium || isMid ? "#D4A843" : "rgba(255,255,255,0.7)",
                  animation: "spin 0.8s linear infinite",
                }}
              />
              <p className="text-white/70 text-sm font-semibold">Aguarde, redirecionando...</p>
              <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
            </div>
          )}

          <p className="text-white/60 text-sm mb-6 leading-relaxed">
            Preencha seus dados para garantir sua vaga e ser redirecionado ao checkout.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label className="block text-white/50 text-[11px] font-bold uppercase tracking-wider mb-1.5">
                Nome completo
              </label>
              <input
                type="text"
                required
                value={form.nome}
                onChange={(e) => setForm((f) => ({ ...f, nome: e.target.value }))}
                placeholder="Seu nome"
                className="w-full rounded-lg px-4 py-3 text-sm text-white placeholder-white/25 outline-none transition-all"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.12)",
                }}
                onFocus={(e) => (e.currentTarget.style.borderColor = isPremium || isMid ? "#D4A843" : "rgba(255,255,255,0.4)")}
                onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)")}
              />
            </div>

            <div>
              <label className="block text-white/50 text-[11px] font-bold uppercase tracking-wider mb-1.5">
                WhatsApp
              </label>
              <input
                type="tel"
                required
                value={form.whatsapp}
                onChange={(e) => setForm((f) => ({ ...f, whatsapp: e.target.value }))}
                placeholder="(00) 00000-0000"
                className="w-full rounded-lg px-4 py-3 text-sm text-white placeholder-white/25 outline-none transition-all"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.12)",
                }}
                onFocus={(e) => (e.currentTarget.style.borderColor = isPremium || isMid ? "#D4A843" : "rgba(255,255,255,0.4)")}
                onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)")}
              />
            </div>

            <div>
              <label className="block text-white/50 text-[11px] font-bold uppercase tracking-wider mb-1.5">
                E-mail
              </label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                placeholder="seu@email.com"
                className="w-full rounded-lg px-4 py-3 text-sm text-white placeholder-white/25 outline-none transition-all"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.12)",
                }}
                onFocus={(e) => (e.currentTarget.style.borderColor = isPremium || isMid ? "#D4A843" : "rgba(255,255,255,0.4)")}
                onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)")}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-2 w-full font-black text-sm tracking-wider py-4 rounded-xl transition-all duration-300"
              style={
                isPremium
                  ? { background: "#D4A843", color: "#0a1628", boxShadow: "0 4px 20px rgba(212,168,67,0.3)" }
                  : isMid
                    ? { background: "#D4A843", color: "#0a1628" }
                    : { background: "rgba(255,255,255,0.1)", color: "#fff", border: "1px solid rgba(255,255,255,0.2)" }
              }
            >
              GARANTIR MEU PASSAPORTE
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export function TicketsSection() {
  const [activeTicket, setActiveTicket] = useState<Ticket | null>(null)

  return (
    <>
      <section
        id="ingressos"
        className="relative py-24 md:py-32 px-6 overflow-hidden"
        style={{ background: "linear-gradient(180deg, #0a1628 0%, #0d1a30 50%, #0a1628 100%)" }}
      >
        <div className="absolute top-[-5%] -left-[5%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#D4A843]/8 rounded-full blur-[120px] md:blur-[180px] pointer-events-none z-0" />
        <div className="absolute bottom-[10%] -right-[5%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#0693e3]/10 rounded-full blur-[120px] md:blur-[180px] pointer-events-none z-0" />
        <div className="absolute top-[50%] left-[40%] w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-[#D4A843]/5 rounded-full blur-[100px] md:blur-[150px] pointer-events-none z-0" />

        <div className="max-w-[1200px] mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-[2.8rem] font-black text-white leading-tight mb-4">
              Escolha seu passaporte e garanta<br />sua vaga no GIGANTES 2026
            </h2>
            <p className="text-white/40 text-sm md:text-base italic">
              Os preços são promocionais e por tempo limitado.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-start">
            {TICKETS.map((ticket) => {
              const isPremium = ticket.type === "premium"
              const isMid = ticket.name === "PREMIUM"

              const cardClass = isPremium
                ? "border-2 border-[#D4A843]/40 bg-[#050505]/70 backdrop-blur-[20px] backdrop-saturate-[120%]"
                : isMid
                  ? "border border-[#D4A843]/30 bg-gradient-to-b from-[#111827] to-[#0c1220]"
                  : "border border-white/10 bg-[#0c1625]/80"

              const titleClass = isPremium ? "gold-shiny" : "text-white"

              const btnClass = isPremium
                ? "bg-[#D4A843] text-[#0a1628] hover:bg-[#e0b44f] shadow-[0_4px_20px_rgba(212,168,67,0.3)]"
                : isMid
                  ? "border border-white/30 text-white hover:border-white/50 hover:bg-white/5 bg-transparent"
                  : "border border-white/20 text-white/80 hover:border-white/40 hover:text-white bg-transparent"

              const dividerClass = isPremium ? "bg-[#D4A843]/20" : isMid ? "bg-white/15" : "bg-white/8"
              const checkClass = isPremium ? "text-[#22c55e]" : isMid ? "text-[#22c55e]/80" : "text-[#22c55e]/70"

              return (
                <div
                  key={ticket.name}
                  className={`rounded-2xl p-7 md:p-8 flex flex-col ${cardClass}`}
                >
                  {/* Title */}
                  <h3
                    className={`font-black text-xl md:text-2xl uppercase leading-tight mb-5 whitespace-pre-line text-center ${titleClass}`}
                  >
                    {ticket.name}
                  </h3>

                  {/* Lotes pricing block */}
                  <div className="mb-5 rounded-xl overflow-hidden" style={{ border: isPremium ? "1px solid rgba(212,168,67,0.2)" : "1px solid rgba(255,255,255,0.08)" }}>
                    {/* Lote 1 — destaque */}
                    <div className="px-4 py-3" style={{ background: isPremium ? "rgba(212,168,67,0.12)" : isMid ? "rgba(255,255,255,0.06)" : "rgba(255,255,255,0.04)" }}>
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-bold tracking-wider uppercase" style={{ color: isPremium ? "#D4A843" : "rgba(255,255,255,0.5)" }}>
                          Lote 1 — Agora
                        </span>
                        <span className="font-black text-xl md:text-2xl text-white">{ticket.price}</span>
                      </div>
                    </div>
                    {/* Divider */}
                    <div style={{ height: "1px", background: isPremium ? "rgba(212,168,67,0.12)" : "rgba(255,255,255,0.06)" }} />
                    {/* Lote 2 */}
                    <div className="px-4 py-2.5 flex items-center justify-between">
                      <span className="text-[11px] font-semibold tracking-wide text-white/35 uppercase">Lote 2</span>
                      <span className="text-sm text-white/35 font-bold">{ticket.lote2}</span>
                    </div>
                    {/* Divider */}
                    <div style={{ height: "1px", background: "rgba(255,255,255,0.04)" }} />
                    {/* Lote 3 */}
                    <div className="px-4 py-2.5 flex items-center justify-between">
                      <span className="text-[11px] font-semibold tracking-wide text-white/25 uppercase">Lote 3</span>
                      <span className="text-sm text-white/25 font-bold">{ticket.lote3}</span>
                    </div>
                  </div>

                  {/* CTA */}
                  <button
                    type="button"
                    onClick={() => setActiveTicket(ticket)}
                    className={`block w-full text-center font-bold text-sm tracking-wider py-3.5 rounded-lg mb-7 transition-all duration-300 cursor-pointer ${btnClass}`}
                  >
                    COMPRAR PASSAPORTE
                  </button>

                  {/* Divider */}
                  <div className={`w-full h-px mb-6 ${dividerClass}`} />

                  {/* Items */}
                  <ul className="space-y-3 flex-1">
                    {ticket.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-white/65 text-[13px] leading-relaxed">
                        <span className={`shrink-0 mt-0.5 text-sm ${checkClass}`}>✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {activeTicket && (
        <PassportModal ticket={activeTicket} onClose={() => setActiveTicket(null)} />
      )}
    </>
  )
}
