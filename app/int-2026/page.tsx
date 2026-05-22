"use client"

import { useState, useRef, useEffect } from "react"
import { createPortal } from "react-dom"
import { MarqueeCarousel } from "@/components/marquee-carousel"
import { MetaPixels } from "@/components/meta-pixels"

const WEBHOOK_URL =
  "https://webhook.sellflux.app/v2/webhook/custom/9dfd5ed8e674be868004fd9c8ea65a44"
const REDIRECT_URL = "/"

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

function normalizePhone(raw: string, dialCode: string = "+55"): string {
  const digits = raw.replace(/\D/g, "")
  return `${dialCode}${digits}`
}

export default function Int2026Page() {
  const [form, setForm] = useState({ nome: "", whatsapp: "", email: "" })
  const [loading, setLoading] = useState(false)
  const [selectedCountry, setSelectedCountry] = useState(COUNTRIES[0])
  const [showDialDropdown, setShowDialDropdown] = useState(false)
  const [phoneFocused, setPhoneFocused] = useState(false)
  const [dropdownPos, setDropdownPos] = useState<{ top: number; left: number } | null>(null)
  const [mounted, setMounted] = useState(false)
  const dialRef = useRef<HTMLDivElement>(null)
  const dialBtnRef = useRef<HTMLButtonElement>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      const target = e.target as Node
      const insideDial = dialRef.current?.contains(target)
      const insideDropdown = dropdownRef.current?.contains(target)
      if (!insideDial && !insideDropdown) {
        setShowDialDropdown(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  useEffect(() => {
    if (!showDialDropdown) return
    function updatePos() {
      const r = dialBtnRef.current?.getBoundingClientRect()
      if (!r) return
      setDropdownPos({ top: r.bottom + 6, left: r.left })
    }
    updatePos()
    window.addEventListener("scroll", updatePos, true)
    window.addEventListener("resize", updatePos)
    return () => {
      window.removeEventListener("scroll", updatePos, true)
      window.removeEventListener("resize", updatePos)
    }
  }, [showDialDropdown])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.nome,
          email: form.email,
          phone: normalizePhone(form.whatsapp, selectedCountry.dial),
        }),
        signal: AbortSignal.timeout(8_000),
      })
    } catch {
      // silently swallow — o redirecionamento ocorre de qualquer forma
    }

    window.location.href = REDIRECT_URL
  }

  return (
    <div
      className="min-h-screen text-white overflow-x-hidden"
      style={{ fontFamily: "'Montserrat', sans-serif" }}
    >
      <MetaPixels />

      <main>
        {/* ─── HERO ─── */}
        <section
          id="hero"
          className="hero-bg relative flex flex-col pt-20 md:pt-24 pb-4"
          style={{ minHeight: "100vh" }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a1628] pointer-events-none z-0" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628]/30 via-transparent to-[#0a1628]/90 pointer-events-none z-0 md:hidden" />

          <div className="flex-1 flex flex-col items-center justify-center text-center px-4 md:px-6 py-8 md:py-12 relative z-10">
            <div className="bg-[#05070a]/40 md:bg-[#05070a]/15 backdrop-blur-[12px] md:backdrop-blur-[10px] backdrop-saturate-[120%] border border-white/10 rounded-2xl flex flex-col items-center relative z-10 mx-auto px-5 py-7 md:px-12 md:py-14 w-full max-w-[600px] shadow-lg">
              <img
                src="/images/GMI2026.png"
                alt="Gigantes do Mercado Imobiliário"
                className="w-52 md:w-72 mb-5 md:mb-6"
              />

              <div className="flex flex-row items-center justify-center gap-2 md:gap-3 text-[11px] md:text-[16px] text-white/90 mb-5 md:mb-6 font-medium whitespace-nowrap">
                <svg
                  width="18"
                  height="18"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="shrink-0 opacity-80"
                >
                  <rect
                    x="3"
                    y="4"
                    width="18"
                    height="18"
                    rx="2"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M16 2v4M8 2v4M3 10h18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
                <span className="tracking-wide">
                  <span>Balneário Camboriú</span>
                  <span> | </span>
                  <span>Outubro de 2026</span>
                </span>
              </div>

              <h1 className="text-[17px] md:text-[24px] font-black uppercase leading-[1.35] md:leading-[1.4] text-white text-center max-w-[500px] mb-6 md:mb-8">
                O EVENTO QUE ENTREGA{" "}
                <span className="text-[#f4c264]">
                  A MAIOR INTELIGÊNCIA DE CONVERSÃO DE VENDAS
                </span>{" "}
                DO MERCADO IMOBILIÁRIO.
              </h1>

              {/* ─── FORMULÁRIO INLINE ─── */}
              <div className="w-full relative">
                {loading && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#0c1625]/95 z-10 rounded-xl">
                    <div
                      className="w-10 h-10 rounded-full border-[3px] border-transparent mb-3"
                      style={{
                        borderTopColor: "#D4A843",
                        animation: "spin 0.8s linear infinite",
                      }}
                    />
                    <p className="text-white/70 text-sm font-semibold">
                      Aguarde, redirecionando...
                    </p>
                    <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
                  </div>
                )}

                <p className="text-white/60 text-sm mb-5 leading-relaxed text-center">
                  Preencha seus dados para conhecer mais sobre o evento e garantir seu passaporte.
                </p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                  <div>
                    <label className="block text-white/50 text-[11px] font-bold uppercase tracking-wider mb-1.5 text-left">
                      Nome completo
                    </label>
                    <input
                      type="text"
                      required
                      value={form.nome}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, nome: e.target.value }))
                      }
                      placeholder="Seu nome"
                      className="w-full rounded-lg px-4 py-3 text-sm text-white placeholder-white/25 outline-none transition-all"
                      style={{
                        background: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(255,255,255,0.12)",
                      }}
                      onFocus={(e) =>
                        (e.currentTarget.style.borderColor = "#D4A843")
                      }
                      onBlur={(e) =>
                        (e.currentTarget.style.borderColor =
                          "rgba(255,255,255,0.12)")
                      }
                    />
                  </div>

                  <div>
                    <label className="block text-white/50 text-[11px] font-bold uppercase tracking-wider mb-1.5 text-left">
                      WhatsApp
                    </label>
                    <div className="flex gap-2">
                      {/* Dial code selector */}
                      <div className="relative" ref={dialRef}>
                        <button
                          ref={dialBtnRef}
                          type="button"
                          onClick={() => setShowDialDropdown((v) => !v)}
                          className="flex items-center gap-1.5 rounded-lg px-3 py-3 text-sm text-white outline-none transition-colors duration-150 whitespace-nowrap"
                          style={{
                            background: "rgba(255,255,255,0.05)",
                            border: `1px solid ${showDialDropdown || phoneFocused ? "#D4A843" : "rgba(255,255,255,0.12)"}`,
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

                        {mounted && showDialDropdown && dropdownPos && createPortal(
                          <div
                            ref={dropdownRef}
                            data-lenis-prevent
                            className="rounded-xl shadow-2xl"
                            style={{
                              position: "fixed",
                              top: dropdownPos.top,
                              left: dropdownPos.left,
                              background: "#0d1829",
                              border: "1px solid rgba(255,255,255,0.12)",
                              maxHeight: "190px",
                              minWidth: "214px",
                              overflowY: "auto",
                              scrollbarWidth: "thin",
                              WebkitOverflowScrolling: "touch",
                              overscrollBehavior: "contain",
                              zIndex: 9999,
                            }}
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
                          </div>,
                          document.body
                        )}
                      </div>

                      {/* Phone number input */}
                      <input
                        type="tel"
                        inputMode="numeric"
                        required
                        value={form.whatsapp}
                        onChange={(e) => {
                          const filtered = e.target.value.replace(/[^\d\s\-\(\)]/g, "").slice(0, 15)
                          setForm((f) => ({ ...f, whatsapp: filtered }))
                        }}
                        placeholder={selectedCountry.code === "BR" ? "(00) 00000-0000" : "Número"}
                        maxLength={15}
                        className="flex-1 rounded-lg px-4 py-3 text-sm text-white placeholder-white/25 outline-none transition-all"
                        style={{
                          background: "rgba(255,255,255,0.05)",
                          border: `1px solid ${phoneFocused ? "#D4A843" : "rgba(255,255,255,0.12)"}`,
                        }}
                        onFocus={() => setPhoneFocused(true)}
                        onBlur={() => setPhoneFocused(false)}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-white/50 text-[11px] font-bold uppercase tracking-wider mb-1.5 text-left">
                      E-mail
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, email: e.target.value }))
                      }
                      placeholder="seu@email.com"
                      className="w-full rounded-lg px-4 py-3 text-sm text-white placeholder-white/25 outline-none transition-all"
                      style={{
                        background: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(255,255,255,0.12)",
                      }}
                      onFocus={(e) =>
                        (e.currentTarget.style.borderColor = "#D4A843")
                      }
                      onBlur={(e) =>
                        (e.currentTarget.style.borderColor =
                          "rgba(255,255,255,0.12)")
                      }
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="mt-2 w-full font-black text-sm tracking-wider py-4 rounded-xl transition-all duration-300"
                    style={{
                      background: "#D4A843",
                      color: "#0a1628",
                      boxShadow: "0 4px 20px rgba(212,168,67,0.3)",
                    }}
                  >
                    CONHECER O EVENTO
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* ─── CAROUSEL DE PARTICIPANTES ─── */}
        <MarqueeCarousel disableBlur hideBottomFade />
      </main>
    </div>
  )
}
