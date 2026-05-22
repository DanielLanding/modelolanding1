"use client"

import { useState } from "react"
import { MarqueeCarousel } from "@/components/marquee-carousel"
import { MetaPixels } from "@/components/meta-pixels"

const WEBHOOK_URL =
  "https://webhook.sellflux.app/v2/webhook/custom/9dfd5ed8e674be868004fd9c8ea65a44"
const REDIRECT_URL = "/"

function normalizePhone(raw: string): string {
  const digits = raw.replace(/\D/g, "")
  if (digits.startsWith("55") && digits.length >= 12) return `+${digits}`
  return `+55${digits}`
}

function LeadModal({ onClose }: { onClose: () => void }) {
  const [form, setForm] = useState({ nome: "", whatsapp: "", email: "" })
  const [loading, setLoading] = useState(false)

  const accentBg =
    "linear-gradient(135deg, #c49b30 0%, #D4A843 50%, #c49b30 100%)"

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
          phone: normalizePhone(form.whatsapp),
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
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/75 backdrop-blur-sm" />

      <div
        className="relative w-full max-w-[420px] rounded-2xl overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.6)]"
        style={{
          background: "#0c1625",
          border: "1px solid rgba(212,168,67,0.25)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="px-6 py-5 flex items-center justify-between"
          style={{ background: accentBg }}
        >
          <div>
            <p
              className="text-[10px] font-bold tracking-[0.2em] uppercase opacity-70"
              style={{ color: "#0a1628" }}
            >
              GIGANTES 2026
            </p>
            <p
              className="font-black text-lg leading-tight tracking-wide"
              style={{ color: "#0a1628" }}
            >
              CONHECER O EVENTO
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            disabled={loading}
            className="rounded-full p-1 transition-opacity hover:opacity-70"
            style={{ color: "#0a1628" }}
          >
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        <div className="px-6 py-7 relative">
          {loading && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#0c1625]/95 z-10 rounded-b-2xl">
              <div
                className="w-12 h-12 rounded-full border-[3px] border-transparent mb-4"
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

          <p className="text-white/60 text-sm mb-6 leading-relaxed">
             Preencha seus dados para conhecer mais sobre o evento, e garantir seu passaporte.
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
              <label className="block text-white/50 text-[11px] font-bold uppercase tracking-wider mb-1.5">
                WhatsApp
              </label>
              <input
                type="tel"
                required
                value={form.whatsapp}
                onChange={(e) =>
                  setForm((f) => ({ ...f, whatsapp: e.target.value }))
                }
                placeholder="(00) 00000-0000"
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
              <label className="block text-white/50 text-[11px] font-bold uppercase tracking-wider mb-1.5">
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
  )
}

export default function Int2026Page() {
  const [modalOpen, setModalOpen] = useState(false)

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
          className="hero-bg relative flex flex-col pt-20 md:pt-24 pb-4 overflow-hidden"
          style={{ minHeight: "75vh" }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a1628] pointer-events-none z-0" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628]/30 via-transparent to-[#0a1628]/90 pointer-events-none z-0 md:hidden" />

          <div className="flex-1 flex flex-col items-center justify-end md:justify-center text-center px-4 md:px-6 py-8 md:py-12 relative z-10">
            <div className="bg-[#05070a]/40 md:bg-[#05070a]/15 backdrop-blur-[12px] md:backdrop-blur-[10px] backdrop-saturate-[120%] border border-white/10 rounded-2xl flex flex-col items-center relative z-10 mx-auto px-5 py-7 md:px-12 md:py-14 w-full max-w-[950px] shadow-lg">
              <img
                src="/images/GMI2026.png"
                alt="Gigantes do Mercado Imobiliário"
                className="w-52 md:w-80 mb-5 md:mb-6"
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
              <h1 className="text-[18px] md:text-[27px] lg:text-[32px] font-black uppercase leading-[1.35] md:leading-[1.4] text-white text-center max-w-[850px] mb-6 md:mb-8">
                O EVENTO QUE ENTREGA{" "}
                <span className="text-[#f4c264]">
                  A MAIOR INTELIGÊNCIA DE CONVERSÃO DE VENDAS
                </span>{" "}
                DO MERCADO IMOBILIÁRIO.
              </h1>
              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="bg-[#f4c264] hover:bg-[#eab34e] text-black rounded-xl font-bold transition-colors block w-full max-w-[550px] text-center p-3 md:p-[1.4rem] text-[16px] md:text-[21px] tracking-wide cursor-pointer"
              >
                CONHECER O EVENTO
              </button>
            </div>
          </div>
        </section>

        {/* ─── CAROUSEL DE PARTICIPANTES ─── */}
        <MarqueeCarousel disableBlur hideBottomFade />
      </main>

      {modalOpen && <LeadModal onClose={() => setModalOpen(false)} />}
    </div>
  )
}
