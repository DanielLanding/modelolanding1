"use client"

import Script from "next/script"

interface WistiaVideoProps {
  videoId: string
}

export function WistiaVideo({ videoId }: WistiaVideoProps) {
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
        className="rounded-xl overflow-hidden"
        style={{ padding: "56.25% 0 0 0", position: "relative" }}
      >
        <div
          style={{
            height: "100%",
            left: 0,
            position: "absolute",
            top: 0,
            width: "100%",
          }}
        >
          <div
            className={`wistia_embed wistia_async_${videoId}`}
            style={{ height: "100%", width: "100%", position: "relative" }}
          />
        </div>
      </div>
    </>
  )
}
