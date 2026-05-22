"use client"

import { useState, useRef, useEffect } from "react"

const COUNTRIES = [
  { code: "BR", dial: "+55", flag: "🇧🇷", name: "Brasil" },
  { code: "US", dial: "+1",  flag: "🇺🇸", name: "EUA" },
  { code: "PT", dial: "+351", flag: "🇵🇹", name: "Portugal" },
  { code: "AR", dial: "+54", flag: "🇦🇷", name: "Argentina" },
  { code: "UY", dial: "+598", flag: "🇺🇾", name: "Uruguai" },
  { code: "PY", dial: "+595", flag: "🇵🇾", name: "Paraguai" },
  { code: "CL", dial: "+56", flag: "🇨🇱", name: "Chile" },
  { code: "CO", dial: "+57", flag: "🇨🇴", name: "Colômbia" },
  { code: "MX", dial: "+52", flag: "🇲🇽", name: "México" },
  { code: "ES", dial: "+34", flag: "🇪🇸", name: "Espanha" },
  { code: "IT", dial: "+39", flag: "🇮🇹", name: "Itália" },
  { code: "GB", dial: "+44", flag: "🇬🇧", name: "Reino Unido" },
  { code: "DE", dial: "+49", flag: "🇩🇪", name: "Alemanha" },
  { code: "FR", dial: "+33", flag: "🇫🇷", name: "França" },
  { code: "AO", dial: "+244", flag: "🇦🇴", name: "Angola" },
  { code: "MZ", dial: "+258", flag: "🇲🇿", name: "Moçambique" },
]

const PLAN_WEBHOOK: Record<string, string> = {
  "LIGHT": "https://webhook.sellflux.app/v2/webhook/custom/cc1ae8b959635b6b68df14a670c361d7",
  "PREMIUM": "https://webhook.sellflux.app/v2/webhook/custom/2207d6bce3bb9550051d770898bc48d4",
  "EXPERIÊNCIA\nALTO PADRÃO": "https://webhook.sellflux.app/v2/webhook/custom/784e012a6794d812924a5c54616b3fe5",
}

const PLAN_TAG: Record<string, string> = {
  "LIGHT": "GMI2026-LIGHT",
  "PREMIUM": "GMI2026-PREMIUM",
  "EXPERIÊNCIA\nALTO PADRÃO": "GMI2026-ALTOPADRAO",
}

function normalizePhone(raw: string, dialCode: string = "+55"): string {
  const digits = raw.replace(/\D/g, "")
  return `${dialCode}${digits}`
}

function validateNome(v: string): string | null {
  if (!v.trim()) return "Nome obrigatório"
  if (v.trim().length < 3) return "Nome muito curto"
  return null
}

function validatePhone(v: string): string | null {
  const digits = v.replace(/\D/g, "")
  if (!digits) return "Número obrigatório"
  if (digits.length < 7) return "Número inválido"
  return null
}

function validateEmail(v: string): string | null {
  if (!v.trim()) return "E-mail obrigatório"
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim())) return "E-mail inválido"
  return null
}

const TICKETS = [
  {
    name: "LIGHT",
    price: "R$ 797,00",
    lote2: "R$ 997,00",
    lote3: "R$ 1.197,00",
    checkoutUrl: "https://payfast.greenn.com.br/pre-checkout/e24ebcg",
    confirmacaoUrl: "/confirmacao/light",
    type: "standard" as const,
    items: [
      "Passaporte dias 1 e 2 do evento",
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
    checkoutUrl: "https://payfast.greenn.com.br/pre-checkout/qmzud7r",
    confirmacaoUrl: "/confirmacao/premium",
    type: "standard" as const,
    items: [
      "Passaporte dias 1 e 2 do evento",
      "Caneta Corretor Vencedor",
      "Bloco de anotações GIGANTES",
      "Material dos patrocinadores",
      "Água durante todo o evento",
      "Água quente para chá ou chimarrão durante todo o evento",
      "Tote Bag personalizada do evento",
      "Café durante todo o evento",
      "Biscoitos durante todo o evento",
      "Pasta Corretor Vencedor",
      " MESAS atrás do passaporte Alto Padrão",
      "Participação no grupo exclusivo do Whats do Gigantes 2026",
      "Apostila do evento inclusa",
    ],
  },
  {
    name: "EXPERIÊNCIA\nALTO PADRÃO",
    price: "R$ 3.997,00",
    lote2: "R$ 4.997,00",
    lote3: "R$ 5.997,00",
    checkoutUrl: "https://payfast.greenn.com.br/pre-checkout/xdh7huk",
    confirmacaoUrl: "/confirmacao/alto-padrao",
    type: "premium" as const,
    items: [
      "Passaporte dias 1, 2 e 3 do evento",
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
type FormErrors = { nome?: string; whatsapp?: string; email?: string }
type FormTouched = { nome?: boolean; whatsapp?: boolean; email?: boolean }

const ErrorIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" className="shrink-0">
    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 11a1 1 0 01-1-1V8a1 1 0 012 0v4a1 1 0 01-1 1zm0 4a1 1 0 110-2 1 1 0 010 2z" />
  </svg>
)

function PassportModal({ ticket, onClose }: { ticket: Ticket; onClose: () => void }) {
  const [form, setForm] = useState({ nome: "", whatsapp: "", email: "" })
  const [selectedCountry, setSelectedCountry] = useState(COUNTRIES[0])
  const [showDialDropdown, setShowDialDropdown] = useState(false)
  const [errors, setErrors] = useState<FormErrors>({})
  const [touched, setTouched] = useState<FormTouched>({})
  const [focusedField, setFocusedField] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const dialRef = useRef<HTMLDivElement>(null)

  const isPremium = ticket.type === "premium"
  const isMid = ticket.name === "PREMIUM"

  const accentBg = isPremium
    ? "linear-gradient(135deg, #D4A843 0%, #f5d680 50%, #D4A843 100%)"
    : isMid
      ? "linear-gradient(135deg, #c49b30 0%, #D4A843 50%, #c49b30 100%)"
      : "linear-gradient(135deg, #1e3a5f 0%, #2a4d7a 50%, #1e3a5f 100%)"

  const planLabel = isPremium ? "EXPERIÊNCIA ALTO PADRÃO" : isMid ? "PREMIUM" : "LIGHT"
  const focusColor = isPremium || isMid ? "#D4A843" : "rgba(255,255,255,0.4)"

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dialRef.current && !dialRef.current.contains(e.target as Node)) {
        setShowDialDropdown(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  function getBorderColor(field: keyof FormErrors) {
    if (errors[field] && touched[field]) return "#ef4444"
    if (focusedField === field) return focusColor
    return "rgba(255,255,255,0.12)"
  }

  function getDialBorderColor() {
    if (errors.whatsapp && touched.whatsapp) return "#ef4444"
    if (focusedField === "whatsapp" || showDialDropdown) return focusColor
    return "rgba(255,255,255,0.12)"
  }

  function handleBlur(field: keyof typeof form) {
    setFocusedField(null)
    setTouched((t) => ({ ...t, [field]: true }))
    const validators = { nome: validateNome, whatsapp: validatePhone, email: validateEmail }
    const err = validators[field](form[field])
    setErrors((prev) => ({ ...prev, [field]: err ?? undefined }))
  }

  function handleChange(field: keyof typeof form, value: string) {
    setForm((f) => ({ ...f, [field]: value }))
    if (touched[field]) {
      const validators = { nome: validateNome, whatsapp: validatePhone, email: validateEmail }
      const err = validators[field](value)
      setErrors((prev) => ({ ...prev, [field]: err ?? undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const newErrors: FormErrors = {
      nome: validateNome(form.nome) ?? undefined,
      whatsapp: validatePhone(form.whatsapp) ?? undefined,
      email: validateEmail(form.email) ?? undefined,
    }
    setErrors(newErrors)
    setTouched({ nome: true, whatsapp: true, email: true })

    if (Object.values(newErrors).some(Boolean)) return

    setLoading(true)

    const phone = normalizePhone(form.whatsapp, selectedCountry.dial)

    try {
      const webhookUrl = PLAN_WEBHOOK[ticket.name]
      if (webhookUrl) {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: form.nome,
            email: form.email,
            phone,
            source: "gigantes-2026",
            tags: [PLAN_TAG[ticket.name]],
          }),
          signal: AbortSignal.timeout(8_000),
        })
      }
    } catch {
      // silently swallow — o redirecionamento ocorre de qualquer forma
    }

    window.location.href = ticket.confirmacaoUrl
  }

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/75 backdrop-blur-sm" />

      <div
        className="relative w-full max-w-[420px] rounded-2xl shadow-[0_30px_80px_rgba(0,0,0,0.6)]"
        style={{
          background: "#0c1625",
          border: `1px solid ${isPremium ? "rgba(212,168,67,0.4)" : isMid ? "rgba(212,168,67,0.25)" : "rgba(255,255,255,0.1)"}`,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Accent header */}
        <div
          className="px-6 py-5 flex items-center justify-between rounded-t-2xl"
          style={{ background: accentBg }}
        >
          <div>
            <p
              className="text-[10px] font-bold tracking-[0.2em] uppercase opacity-70"
              style={{ color: isPremium || isMid ? "#0a1628" : "#fff" }}
            >
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

        {/* Form body */}
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
            Preencha seus dados para garantir seu passaporte.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
            {/* Nome */}
            <div>
              <label className="block text-white/50 text-[11px] font-bold uppercase tracking-wider mb-1.5">
                Nome completo
              </label>
              <input
                type="text"
                value={form.nome}
                onChange={(e) => handleChange("nome", e.target.value)}
                onFocus={() => setFocusedField("nome")}
                onBlur={() => handleBlur("nome")}
                placeholder="Seu nome completo"
                className="w-full rounded-lg px-4 py-3 text-sm text-white placeholder-white/25 outline-none transition-colors duration-150"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: `1px solid ${getBorderColor("nome")}`,
                }}
              />
              {errors.nome && touched.nome && (
                <p className="text-red-400 text-[11px] mt-1.5 flex items-center gap-1">
                  <ErrorIcon /> {errors.nome}
                </p>
              )}
            </div>

            {/* WhatsApp com seletor de país */}
            <div>
              <label className="block text-white/50 text-[11px] font-bold uppercase tracking-wider mb-1.5">
                WhatsApp
              </label>
              <div className="flex gap-2">
                {/* Country dial selector */}
                <div className="relative" ref={dialRef}>
                  <button
                    type="button"
                    onClick={() => setShowDialDropdown((v) => !v)}
                    className="flex items-center gap-1.5 rounded-lg px-3 py-3 text-sm text-white outline-none transition-colors duration-150 whitespace-nowrap"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: `1px solid ${getDialBorderColor()}`,
                      minWidth: "82px",
                    }}
                  >
                    <span className="text-base leading-none">{selectedCountry.flag}</span>
                    <span className="text-white/70 text-xs font-medium">{selectedCountry.dial}</span>
                    <svg
                      width="10" height="10" viewBox="0 0 24 24" fill="none"
                      className="opacity-40 ml-auto transition-transform duration-200"
                      style={{ transform: showDialDropdown ? "rotate(180deg)" : "rotate(0deg)" }}
                    >
                      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                    </svg>
                  </button>

                  {showDialDropdown && (
                    <div
                      className="absolute top-full left-0 mt-1.5 rounded-xl overflow-y-auto shadow-2xl z-50"
                      style={{
                        background: "#0d1829",
                        border: "1px solid rgba(255,255,255,0.12)",
                        maxHeight: "190px",
                        minWidth: "214px",
                        scrollbarWidth: "thin",
                        WebkitOverflowScrolling: "touch",
                        overscrollBehavior: "contain",
                      }}
                      onMouseDown={(e) => e.stopPropagation()}
                    >
                      {COUNTRIES.map((country) => {
                        const isSelected = country.code === selectedCountry.code
                        return (
                          <button
                            key={country.code}
                            type="button"
                            onClick={() => {
                              setSelectedCountry(country)
                              setShowDialDropdown(false)
                            }}
                            className="w-full flex items-center gap-3 px-4 py-2.5 text-left text-sm transition-colors duration-100"
                            style={{ background: isSelected ? "rgba(255,255,255,0.08)" : "transparent" }}
                            onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.08)" }}
                            onMouseLeave={(e) => { e.currentTarget.style.background = isSelected ? "rgba(255,255,255,0.08)" : "transparent" }}
                          >
                            <span className="text-base">{country.flag}</span>
                            <span className="flex-1 text-white/80 text-xs">{country.name}</span>
                            <span className="text-white/40 text-xs font-medium">{country.dial}</span>
                          </button>
                        )
                      })}
                    </div>
                  )}
                </div>

                {/* Phone number input */}
                <input
                  type="tel"
                  inputMode="numeric"
                  value={form.whatsapp}
                  onChange={(e) => {
                    const filtered = e.target.value.replace(/[^\d\s\-\(\)]/g, "").slice(0, 15)
                    handleChange("whatsapp", filtered)
                  }}
                  onFocus={() => setFocusedField("whatsapp")}
                  onBlur={() => handleBlur("whatsapp")}
                  placeholder={selectedCountry.code === "BR" ? "(00) 00000-0000" : "Número"}
                  maxLength={15}
                  className="flex-1 rounded-lg px-4 py-3 text-sm text-white placeholder-white/25 outline-none transition-colors duration-150"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: `1px solid ${getBorderColor("whatsapp")}`,
                  }}
                />
              </div>
              {errors.whatsapp && touched.whatsapp && (
                <p className="text-red-400 text-[11px] mt-1.5 flex items-center gap-1">
                  <ErrorIcon /> {errors.whatsapp}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-white/50 text-[11px] font-bold uppercase tracking-wider mb-1.5">
                E-mail
              </label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => handleChange("email", e.target.value)}
                onFocus={() => setFocusedField("email")}
                onBlur={() => handleBlur("email")}
                placeholder="seu@email.com"
                className="w-full rounded-lg px-4 py-3 text-sm text-white placeholder-white/25 outline-none transition-colors duration-150"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: `1px solid ${getBorderColor("email")}`,
                }}
              />
              {errors.email && touched.email && (
                <p className="text-red-400 text-[11px] mt-1.5 flex items-center gap-1">
                  <ErrorIcon /> {errors.email}
                </p>
              )}
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
              const btnClass = "bg-[#D4A843] text-[#0a1628] hover:bg-[#e0b44f] shadow-[0_4px_20px_rgba(212,168,67,0.35)] font-black"
              const dividerClass = isPremium ? "bg-[#D4A843]/20" : isMid ? "bg-white/15" : "bg-white/8"
              const checkClass = isPremium ? "text-[#22c55e]" : isMid ? "text-[#22c55e]/80" : "text-[#22c55e]/70"

              return (
                <div
                  key={ticket.name}
                  className={`rounded-2xl p-7 md:p-8 flex flex-col ${cardClass}`}
                >
                  <h3
                    className={`font-black text-xl md:text-2xl uppercase leading-tight mb-5 whitespace-pre-line text-center ${titleClass}`}
                  >
                    {ticket.name}
                  </h3>

                  <div className="mb-5 rounded-xl overflow-hidden" style={{ border: isPremium ? "1px solid rgba(212,168,67,0.2)" : "1px solid rgba(255,255,255,0.08)" }}>
                    <div className="px-4 py-3" style={{ background: isPremium ? "rgba(212,168,67,0.12)" : isMid ? "rgba(255,255,255,0.06)" : "rgba(255,255,255,0.04)" }}>
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-bold tracking-wider uppercase" style={{ color: isPremium ? "#D4A843" : "rgba(255,255,255,0.5)" }}>
                          Lote 1 — Agora
                        </span>
                        <span className="font-black text-xl md:text-2xl text-white">{ticket.price}</span>
                      </div>
                    </div>
                    <div style={{ height: "1px", background: isPremium ? "rgba(212,168,67,0.12)" : "rgba(255,255,255,0.06)" }} />
                    <div className="px-4 py-2.5 flex items-center justify-between">
                      <span className="text-[11px] font-semibold tracking-wide text-white/35 uppercase">Lote 2</span>
                      <span className="text-sm text-white/35 font-bold">{ticket.lote2}</span>
                    </div>
                    <div style={{ height: "1px", background: "rgba(255,255,255,0.04)" }} />
                    <div className="px-4 py-2.5 flex items-center justify-between">
                      <span className="text-[11px] font-semibold tracking-wide text-white/25 uppercase">Lote 3</span>
                      <span className="text-sm text-white/25 font-bold">{ticket.lote3}</span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setActiveTicket(ticket)}
                    className={`block w-full text-center font-bold text-sm tracking-wider py-3.5 rounded-lg mb-7 transition-all duration-300 cursor-pointer ${btnClass}`}
                  >
                    COMPRAR PASSAPORTE
                  </button>

                  <div className={`w-full h-px mb-6 ${dividerClass}`} />

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
