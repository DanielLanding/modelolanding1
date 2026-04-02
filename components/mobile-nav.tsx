"use client"

import { useState, useEffect } from "react"

const NAV_LINKS = [
  ["#ingressos", "INGRESSOS"],
  ["#sobre", "SOBRE"],
  ["#edicao", "EDIÇÃO 2026"],
  ["#depoimentos", "DEPOIMENTOS"],
  ["#experiencia", "ALTO PADRÃO"],
]

export function MobileNav() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [open])

  return (
    <>
      {/* Hamburger button — só mobile */}
      <button
        type="button"
        className="lg:hidden flex flex-col justify-center gap-1.5 p-2 shrink-0"
        onClick={() => setOpen(true)}
        aria-label="Abrir menu"
      >
        <span className="block w-6 h-0.5 bg-white rounded-full transition-all" />
        <span className="block w-6 h-0.5 bg-white rounded-full transition-all" />
        <span className="block w-4 h-0.5 bg-white rounded-full transition-all" />
      </button>

      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-50 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
      />

      {/* Drawer lateral */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-72 flex flex-col transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        style={{
          background: "rgba(8,8,20,0.98)",
          borderLeft: "1px solid rgba(255,255,255,0.1)",
          backdropFilter: "blur(24px)",
        }}
      >
        {/* Header do drawer */}
        <div
          className="flex items-center justify-between px-6 py-5"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
        >
          <img src="/logo-gigantes.svg" alt="Gigantes" className="h-8 w-auto" />
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="text-white/50 hover:text-white p-1 transition-colors"
            aria-label="Fechar menu"
          >
            <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
              <path
                d="M4 4l12 12M16 4L4 16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        {/* Links */}
        <nav className="flex flex-col px-6 py-8 gap-1">
          {NAV_LINKS.map(([href, label]) => (
            <a
              key={href}
              href={href}
              className="text-white/60 hover:text-white text-sm font-bold tracking-widest uppercase transition-colors py-3 border-b border-white/5"
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="px-6 mt-auto mb-10">
          <a
            href="#ingressos"
            className="block text-center text-white text-sm font-black px-6 py-4 rounded-full transition-all hover:opacity-90"
            style={{ backgroundColor: "#0693e3", boxShadow: "0 4px 20px rgba(6,147,227,0.3)" }}
            onClick={() => setOpen(false)}
          >
            Resgatar 50% de desconto
          </a>
        </div>
      </div>
    </>
  )
}
