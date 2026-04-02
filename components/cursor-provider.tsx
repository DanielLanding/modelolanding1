"use client"

import { useEffect, useRef, useState } from "react"

export function CursorProvider({ children }: { children: React.ReactNode }) {
  const cursorRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const [clicking, setClicking] = useState(false)
  const [hovering, setHovering] = useState(false)
  const mouse = useRef({ x: 0, y: 0 })
  const ring = useRef({ x: 0, y: 0 })

  useEffect(() => {
    // Hide on touch devices
    if (typeof window !== "undefined" && "ontouchstart" in window) return

    const onMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX
      mouse.current.y = e.clientY
      if (!visible) setVisible(true)
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
      }
    }

    const onDown = () => setClicking(true)
    const onUp = () => setClicking(false)

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.closest("a, button, [role='button'], input, textarea, select, label")) {
        setHovering(true)
      }
    }
    const onOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.closest("a, button, [role='button'], input, textarea, select, label")) {
        setHovering(false)
      }
    }

    const onLeave = () => setVisible(false)
    const onEnter = () => setVisible(true)

    // Ring follow with delay=10 (very smooth/slow follow)
    let raf: number
    const animate = () => {
      const speed = 0.08 // delay 10 = very slow follow
      ring.current.x += (mouse.current.x - ring.current.x) * speed
      ring.current.y += (mouse.current.y - ring.current.y) * speed
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.current.x}px, ${ring.current.y}px)`
      }
      raf = requestAnimationFrame(animate)
    }
    raf = requestAnimationFrame(animate)

    document.addEventListener("mousemove", onMove)
    document.addEventListener("mousedown", onDown)
    document.addEventListener("mouseup", onUp)
    document.addEventListener("mouseover", onOver)
    document.addEventListener("mouseout", onOut)
    document.addEventListener("mouseleave", onLeave)
    document.addEventListener("mouseenter", onEnter)

    return () => {
      cancelAnimationFrame(raf)
      document.removeEventListener("mousemove", onMove)
      document.removeEventListener("mousedown", onDown)
      document.removeEventListener("mouseup", onUp)
      document.removeEventListener("mouseover", onOver)
      document.removeEventListener("mouseout", onOut)
      document.removeEventListener("mouseleave", onLeave)
      document.removeEventListener("mouseenter", onEnter)
    }
  }, [visible])

  return (
    <>
      {/* Dot cursor */}
      <div
        ref={cursorRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: hovering ? 18 : clicking ? 8 : 10,
          height: hovering ? 18 : clicking ? 8 : 10,
          backgroundColor: "#D4A843",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 99999,
          opacity: visible ? 1 : 0,
          marginLeft: hovering ? -9 : clicking ? -4 : -5,
          marginTop: hovering ? -9 : clicking ? -4 : -5,
          transition: "width 0.2s, height 0.2s, margin 0.2s, opacity 0.3s",
          mixBlendMode: "difference",
        }}
      />
      {/* Ring cursor */}
      <div
        ref={ringRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: hovering ? 50 : clicking ? 30 : 40,
          height: hovering ? 50 : clicking ? 30 : 40,
          border: `1.5px solid ${hovering ? "rgba(212,168,67,0.8)" : "rgba(212,168,67,0.4)"}`,
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 99998,
          opacity: visible ? 1 : 0,
          marginLeft: hovering ? -25 : clicking ? -15 : -20,
          marginTop: hovering ? -25 : clicking ? -15 : -20,
          transition: "width 0.25s, height 0.25s, margin 0.25s, border-color 0.25s, opacity 0.3s",
        }}
      />
      <style>{`
        @media (min-width: 769px) {
          * { cursor: none !important; }
        }
        @media (max-width: 768px) {
          .phinger-dot, .phinger-ring { display: none !important; }
        }
      `}</style>
      {children}
    </>
  )
}
