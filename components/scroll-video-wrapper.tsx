"use client"
import { useEffect, useState, useRef } from "react"

export function ScrollVideoWrapper({ children }: { children: React.ReactNode }) {
  const [scale, setScale] = useState(0.85);
  const [blur, setBlur] = useState(10);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (ref.current) {
            const rect = ref.current.getBoundingClientRect()
            const viewHeight = window.innerHeight

            // Start animation when top edge enters screen
            const startAt = viewHeight * 0.95;
            // Fully animated when it reaches slightly above center
            const fullyAt = viewHeight * 0.45;

            let currentScale = 0.85;
            let currentBlur = 10;

            if (rect.top > startAt) {
              currentScale = 0.85;
              currentBlur = 10;
            } else if (rect.top < fullyAt) {
              currentScale = 1;
              currentBlur = 0;
            } else {
              const range = startAt - fullyAt;
              const progress = (startAt - rect.top) / range; // 0 to 1
              
              currentScale = 0.85 + (0.15 * progress);
              currentBlur = 10 - (10 * progress);
            }

            setScale(currentScale);
            setBlur(currentBlur);
          }
          ticking = false;
        })
        ticking = true;
      }
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div 
      ref={ref} 
      style={{ 
        transform: `scale(${scale})`, 
        filter: `blur(${blur}px)`,
        willChange: 'transform, filter'
      }} 
      className="w-full mx-auto"
    >
      {children}
    </div>
  )
}
