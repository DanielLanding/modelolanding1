import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import "./globals.css"

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
})

export const metadata: Metadata = {
  title: "Gigantes do Mercado Imobiliário 2026",
  description:
    "O evento que entrega a maior inteligência de conversão de vendas do mercado imobiliário",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={montserrat.className}>{children}</body>
    </html>
  )
}
