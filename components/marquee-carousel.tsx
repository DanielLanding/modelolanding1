"use client"

import { useEffect, useState, useRef } from "react"

const PESSOAS = Array.from({ length: 11 }, (_, i) => `/pessoa${i}`)
const DOUBLED = [...PESSOAS, ...PESSOAS]

type MarqueeCarouselProps = {
  disableBlur?: boolean
  hideBottomFade?: boolean
}

export function MarqueeCarousel({ disableBlur = false, hideBottomFade = false }: MarqueeCarouselProps = {}) {
  const [blurAmount, setBlurAmount] = useState(disableBlur ? 0 : 15)
  const carouselRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)

  // JS-driven marquee (corre mesmo com prefers-reduced-motion ativo no SO).
  useEffect(() => {
    if (!disableBlur) return

    const track = trackRef.current
    if (!track) return

    const SPEED_PX_PER_SEC = 60
    let offset = 0
    let lastTs: number | null = null
    let rafId = 0

    const tick = (ts: number) => {
      if (lastTs !== null) {
        const dt = (ts - lastTs) / 1000
        offset += SPEED_PX_PER_SEC * dt
        const half = track.scrollWidth / 2
        if (half > 0 && offset >= half) offset -= half
        track.style.transform = `translate3d(${-offset}px, 0, 0)`
      }
      lastTs = ts
      rafId = window.requestAnimationFrame(tick)
    }

    rafId = window.requestAnimationFrame(tick)
    return () => window.cancelAnimationFrame(rafId)
  }, [disableBlur])

  useEffect(() => {
    if (disableBlur) return

    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (carouselRef.current) {
            const rect = carouselRef.current.getBoundingClientRect()
            const viewHeight = window.innerHeight

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
  }, [disableBlur])

  return (
    <div
      ref={carouselRef}
      className="carousel-wrapper w-full overflow-hidden relative"
      style={{ background: hideBottomFade ? "var(--navy-dark)" : "#f5f5f7", zIndex: 1 }}
    >

      {/* Background Sólido Azul Marinho */}
      <div
        className="absolute inset-x-0 top-0 pointer-events-none -z-10"
        style={{
          height: hideBottomFade ? "100%" : "calc(100% - 3rem)",
          backgroundColor: "var(--navy-dark)"
        }}
      />

      {/* Máscara de Desfoque/Fade Suave na base */}
      {!hideBottomFade && (
        <div
          className="absolute inset-x-0 bottom-0 pointer-events-none -z-10"
          style={{
            height: "3rem",
            background: "linear-gradient(to bottom, var(--navy-dark) 0%, #f5f5f7 100%)",
            backdropFilter: "blur(8px)"
          }}
        />
      )}

      <div
        ref={trackRef}
        className="marquee-track relative z-10"
        style={
          disableBlur
            ? { animation: "none", transform: "translate3d(0,0,0)", willChange: "transform" }
            : { filter: `blur(${blurAmount}px)` }
        }
      >
        {DOUBLED.map((src, i) => (
          <div key={i} className="marquee-card shrink-0 shadow-none">
            <img
              src={src}
              alt={`Participante ${i + 1}`}
              className="w-full h-full object-cover object-top"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
