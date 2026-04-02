"use client"

import { useState, useEffect } from "react"
import { createPortal } from "react-dom"

const NAV_LINKS = [
  ["#hero", "Início"],
  ["#ingressos", "Ingressos"],
  ["#sobre", "Sobre o Evento"],
  ["#edicao", "Edição 2026"],
  ["#depoimentos", "Depoimentos"],
  ["#experiencia", "Experiência Alto Padrão"],
]

export function MobileNav() {
  const [open, setOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const check = () => setIsMobile(window.innerWidth < 1024)
    check()
    window.addEventListener("resize", check)
    return () => window.removeEventListener("resize", check)
  }, [])

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => { document.body.style.overflow = "" }
  }, [open])

  useEffect(() => {
    if (!isMobile && open) setOpen(false)
  }, [isMobile, open])

  if (!mounted || !isMobile) return null

  const menu = (
    <>
      {/* Backdrop escuro */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 99990,
            backgroundColor: "rgba(0, 0, 0, 0.8)",
          }}
        />
      )}

      {/* Drawer lateral */}
      <div
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          bottom: 0,
          zIndex: 99991,
          width: 300,
          backgroundColor: "#060d1a",
          borderLeft: open ? "1px solid rgba(212, 168, 67, 0.15)" : "none",
          boxShadow: open ? "-20px 0 60px rgba(0, 0, 0, 0.7)" : "none",
          display: "flex",
          flexDirection: "column",
          transform: open ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
          willChange: "transform",
        }}
      >
        {/* Header do menu */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "20px 24px",
            borderBottom: "1px solid rgba(255, 255, 255, 0.06)",
          }}
        >
          <span style={{ fontWeight: 900, fontSize: "1.2rem", letterSpacing: "0.03em" }}>
            <span style={{ color: "#D4A843" }}>GIGANTES</span>{" "}
            <span style={{ color: "#ffffff" }}>2026</span>
          </span>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Fechar menu"
            style={{
              background: "none",
              border: "none",
              padding: 4,
              color: "rgba(255, 255, 255, 0.5)",
              cursor: "pointer",
            }}
          >
            <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* Links de navegação */}
        <nav style={{ display: "flex", flexDirection: "column", padding: "28px 24px", gap: 2 }}>
          {NAV_LINKS.map(([href, label]) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              style={{
                color: "rgba(255, 255, 255, 0.7)",
                fontSize: "0.82rem",
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase" as const,
                textDecoration: "none",
                padding: "14px 0",
                borderBottom: "1px solid rgba(255, 255, 255, 0.04)",
              }}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div style={{ padding: "0 24px", marginTop: "auto", marginBottom: 40 }}>
          <a
            href="#ingressos"
            onClick={() => setOpen(false)}
            style={{
              display: "block",
              width: "100%",
              textAlign: "center",
              fontSize: "0.85rem",
              fontWeight: 900,
              padding: "16px 24px",
              borderRadius: 8,
              backgroundColor: "#D4A843",
              color: "#0a0a0a",
              textDecoration: "none",
            }}
          >
            Resgatar 50% de desconto
          </a>
        </div>
      </div>
    </>
  )

  return (
    <>
      {/* Hamburger fixo no topo direito */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Abrir menu"
        style={{
          position: "fixed",
          top: 14,
          right: 16,
          zIndex: 99989,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: 5,
          padding: 8,
          background: "none",
          border: "none",
          cursor: "pointer",
        }}
      >
        <span style={{ display: "block", width: 26, height: 2, backgroundColor: "#fff", borderRadius: 2 }} />
        <span style={{ display: "block", width: 26, height: 2, backgroundColor: "#fff", borderRadius: 2 }} />
        <span style={{ display: "block", width: 18, height: 2, backgroundColor: "#fff", borderRadius: 2 }} />
      </button>

      {/* Portal: renderiza backdrop + drawer direto no body, fora de qualquer stacking context */}
      {createPortal(menu, document.body)}
    </>
  )
}
