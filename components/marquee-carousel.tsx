"use client"

const PESSOAS = Array.from({ length: 11 }, (_, i) => `/pessoa${i}`)
const DOUBLED = [...PESSOAS, ...PESSOAS]

export function MarqueeCarousel() {
  return (
    <div className="marquee-bg-white py-6 w-full overflow-hidden">
      <div className="marquee-track">
        {DOUBLED.map((src, i) => (
          <div key={i} className="marquee-card shrink-0 rounded-2xl overflow-hidden">
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
