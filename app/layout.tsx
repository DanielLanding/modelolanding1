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
  title: "Corretor Vencedor 2026",
  description:
    "O evento que entrega a maior inteligência de conversão de vendas do mercado imobiliário",
  icons: {
    icon: "/imersao.favi.png",
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
