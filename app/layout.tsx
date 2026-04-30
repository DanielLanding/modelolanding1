import type { Metadata } from "next"
import { Montserrat, Dancing_Script } from "next/font/google"
import Script from "next/script"
import { SmoothScroll } from "@/components/smooth-scroll"
import "./globals.css"

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
})

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-dancing",
})

export const metadata: Metadata = {
  title: "Gigantes do Mercado Imobiliário - A Evento de Maior Transformação em Vendas do Brasil!",
  description:
    "O evento que entrega a maior inteligência de conversão de vendas do mercado imobiliário",
  icons: {
    icon: "/imersao.favi.png",
  },
  openGraph: {
    title: "Gigantes do Mercado Imobiliário - A Evento de Maior Transformação em Vendas do Brasil!",
    description:
      "O evento que entrega a maior inteligência de conversão de vendas do mercado imobiliário",
    images: [
      {
        url: "/banner.jpeg",
        width: 1200,
        height: 630,
        alt: "Gigantes do Mercado Imobiliário 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gigantes do Mercado Imobiliário - A Evento de Maior Transformação em Vendas do Brasil!",
    description:
      "O evento que entrega a maior inteligência de conversão de vendas do mercado imobiliário",
    images: ["/banner.jpeg"],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={`${montserrat.variable} ${dancingScript.variable} ${montserrat.className}`}>
        <Script src="https://fast.wistia.com/assets/external/E-v1.js" strategy="afterInteractive" />
        <SmoothScroll />
        {children}
      </body>
    </html>
  )
}
