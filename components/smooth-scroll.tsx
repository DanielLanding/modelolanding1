"use client"

import { useEffect } from "react"
import Lenis from "lenis"

export function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.8,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 2,
    })

    // Handle anchor links
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const anchor = target.closest("a[href^='#']") as HTMLAnchorElement | null
      if (anchor) {
        const id = anchor.getAttribute("href")
        if (id && id !== "#") {
          const el = document.querySelector(id)
          if (el) {
            e.preventDefault()
            lenis.scrollTo(el as HTMLElement, { offset: -80 })
          }
        }
      }
    }

    document.addEventListener("click", onClick)

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    return () => {
      document.removeEventListener("click", onClick)
      lenis.destroy()
    }
  }, [])

  return null
}
