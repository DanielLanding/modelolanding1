"use client"

import { useEffect, useState, useRef } from "react"

const PESSOAS = Array.from({ length: 11 }, (_, i) => `/pessoa${i}`)
const DOUBLED = [...PESSOAS, ...PESSOAS]

export function MarqueeCarousel() {
  const [blurAmount, setBlurAmount] = useState(15)
  const carouselRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (carouselRef.current) {
            const rect = carouselRef.current.getBoundingClientRect()
            const viewHeight = window.innerHeight

            // O foco total ocorre quando o carrossel sobe até uns 60% da tela (mais visível)
            const startBlurAt = viewHeight * 1.1
            const fullyClearAt = viewHeight * 0.65

            let currentBlur = 0
            if (rect.top > startBlurAt) {
              currentBlur = 15
            } else if (rect.top < fullyClearAt) {
              currentBlur = 0
            } else {
              const range = startBlurAt - fullyClearAt
              const progress = (rect.top - fullyClearAt) / range
              currentBlur = progress * 15
            }

            setBlurAmount(currentBlur)
          }
          ticking = false
        })
        ticking = true
      }
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div ref={carouselRef} className="carousel-wrapper w-full overflow-hidden relative" style={{ background: "#f5f5f7", zIndex: 1 }}>

      {/* Background Sólido Azul Marinho */}
      <div
        className="absolute inset-x-0 top-0 pointer-events-none -z-10"
        style={{
          height: "calc(100% - 3rem)",
          backgroundColor: "var(--navy-dark)"
        }}
      />

      {/* Máscara de Desfoque/Fade Suave na base */}
      <div
        className="absolute inset-x-0 bottom-0 pointer-events-none -z-10"
        style={{
          height: "3rem",
          background: "linear-gradient(to bottom, var(--navy-dark) 0%, #f5f5f7 100%)",
          backdropFilter: "blur(8px)"
        }}
      />

      <div 
        className="marquee-track relative z-10"
        style={{ filter: `blur(${blurAmount}px)` }}
      >
        {DOUBLED.map((src, i) => (
          <div key={i} className="marquee-card shrink-0 shadow-none">
            <img
              src={src}
              alt={`Participante ${i + 1}`}
              className="w-full h-full object-cover object-top"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
