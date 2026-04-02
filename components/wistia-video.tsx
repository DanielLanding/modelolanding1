"use client"

import Script from "next/script"

interface WistiaVideoProps {
  videoId: string
  className?: string
  aspectRatio?: string
}

export function WistiaVideo({ videoId, className = "rounded-2xl", aspectRatio = "2.39 / 1" }: WistiaVideoProps) {
  return (
    <>
      <Script
        src={`https://fast.wistia.com/embed/medias/${videoId}.jsonp`}
        strategy="lazyOnload"
      />
      <Script
        src="https://fast.wistia.com/assets/external/E-v1.js"
        strategy="lazyOnload"
      />
      <div 
        className={`w-full relative overflow-hidden ${className}`}
        style={{ aspectRatio, backgroundColor: "transparent" }}
      >
        <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}>
          <div
            className={`wistia_embed wistia_async_${videoId} videoFoam=true`}
            style={{ height: "100%", width: "100%", position: "relative", backgroundColor: "transparent" }}
          />
        </div>
      </div>
    </>
  )
}
