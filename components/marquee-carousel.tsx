"use client"

import { useRef } from "react"

const PESSOAS = Array.from({ length: 11 }, (_, i) => `/pessoa${i}`)

export function MarqueeCarousel() {
  const trackRef = useRef<HTMLDivElement>(null)

  const scroll = (dir: "prev" | "next") => {
    const el = trackRef.current
    if (!el) return
    const card = el.firstElementChild as HTMLElement | null
    if (!card) return
    const amount = card.offsetWidth + 12
    el.scrollBy({ left: dir === "next" ? amount : -amount, behavior: "smooth" })
  }

  return (
    <div className="py-5 px-6 bg-black">
      <div className="max-w-5xl mx-auto flex items-center gap-4">
        <button
          type="button"
          onClick={() => scroll("prev")}
          className="carousel-arrow-btn shrink-0 w-10 h-10 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
          aria-label="Anterior"
        >
          <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
            <path d="M10 3L5 8L10 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <div ref={trackRef} className="carousel-track flex-1 flex overflow-hidden">
          {PESSOAS.map((src, i) => (
            <div key={i} className="carousel-card shrink-0 rounded-2xl overflow-hidden">
              <img src={src} alt={`Participante ${i + 1}`} />
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={() => scroll("next")}
          className="carousel-arrow-btn shrink-0 w-10 h-10 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
          aria-label="Próximo"
        >
          <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
            <path d="M6 3L11 8L6 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  )
}
