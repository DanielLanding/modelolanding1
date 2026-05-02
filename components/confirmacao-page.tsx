"use client"

import { useEffect, useState } from "react"

interface Props {
  ticketName: string
  checkoutUrl: string
  variant: "light" | "premium" | "alto-padrao"
}

export function ConfirmacaoPage({ ticketName, checkoutUrl, variant }: Props) {
  const [countdown, setCountdown] = useState(5)

  useEffect(() => {
    if (countdown <= 0) {
      window.location.href = checkoutUrl
      return
    }
    const timer = setTimeout(() => setCountdown((c) => c - 1), 1000)
    return () => clearTimeout(timer)
  }, [countdown, checkoutUrl])

  const isGold = variant === "premium" || variant === "alto-padrao"
  const accentColor = isGold ? "#D4A843" : "rgba(255,255,255,0.85)"
  const circumference = 2 * Math.PI * 36

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden"
      style={{ fontFamily: "'Montserrat', sans-serif" }}
    >
      {/* Background image (mesma da seção hero) */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/img1.jpg"
          alt=""
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#0a1628]/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628]/60 via-transparent to-[#0a1628]/90" />
      </div>

      {/* Glow blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[400px] h-[400px] rounded-full pointer-events-none z-0" style={{ background: isGold ? "rgba(212,168,67,0.08)" : "rgba(6,147,227,0.08)", filter: "blur(130px)" }} />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full pointer-events-none z-0" style={{ background: isGold ? "rgba(212,168,67,0.06)" : "rgba(6,147,227,0.06)", filter: "blur(160px)" }} />

      <div className="relative z-10 flex flex-col items-center text-center max-w-[560px] w-full">
        {/* Logo */}
        <img
          src="/images/GMI2026.png"
          alt="Gigantes do Mercado Imobiliário 2026"
          className="w-44 md:w-56 mb-8"
        />

        {/* Badge do passaporte */}
        <p className="text-[11px] font-bold tracking-[0.25em] uppercase mb-6 px-4 py-1.5 rounded-full" style={{ color: isGold ? "#D4A843" : "rgba(255,255,255,0.7)", background: isGold ? "rgba(212,168,67,0.12)" : "rgba(255,255,255,0.08)", border: `1px solid ${isGold ? "rgba(212,168,67,0.3)" : "rgba(255,255,255,0.15)"}` }}>
          Passaporte {ticketName}
        </p>

        {/* Mensagem principal */}
        <h1 className="text-2xl md:text-3xl font-black text-white mb-5 leading-snug">
          Parabéns! Você acaba de dar o primeiro passo para garantir seu passaporte para o{" "}
          <span style={{ color: accentColor }}>Gigantes do Mercado Imobiliário 2026</span>.
        </h1>

        <p className="text-white/60 text-[15px] leading-relaxed mb-10">
          Você será redirecionado em segundos para concluir sua compra.
        </p>

        {/* Countdown ring */}
        <div className="relative w-24 h-24 mb-6">
          <svg className="w-full h-full -rotate-90" viewBox="0 0 80 80">
            <circle cx="40" cy="40" r="36" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="5" />
            <circle
              cx="40" cy="40" r="36" fill="none"
              stroke={accentColor}
              strokeWidth="5"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={circumference - (circumference * (5 - countdown)) / 5}
              style={{ transition: "stroke-dashoffset 0.9s linear" }}
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-3xl font-black text-white">{countdown}</span>
          </div>
        </div>

        <p className="text-white/30 text-xs mb-10">Redirecionando em {countdown}s…</p>

        {/* Fallback manual */}
        <p className="text-white/40 text-[13px] mb-3">Se não redirecionar automaticamente, clique aqui:</p>
        <a
          href={checkoutUrl}
          className="font-bold text-sm tracking-wider py-3.5 px-10 rounded-xl transition-all duration-300"
          style={
            isGold
              ? { background: "#D4A843", color: "#0a1628", boxShadow: "0 4px 20px rgba(212,168,67,0.3)" }
              : { background: "rgba(255,255,255,0.1)", color: "#fff", border: "1px solid rgba(255,255,255,0.25)" }
          }
        >
          CONCLUIR COMPRA
        </a>
      </div>
    </div>
  )
}
