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

// Atualize esta URL com o domínio real do site
const BASE_URL = "https://gigantes.ibraciv.com"

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Gigantes do Mercado Imobiliário",
    template: "%s | Gigantes do Mercado Imobiliário",
  },
  description:
    "O evento que entrega a maior inteligência de conversão de vendas do mercado imobiliário. 2 dias de imersão com Altemir Rocha em Balneário Camboriú, 15 e 16 de outubro de 2026.",
  keywords: [
    "gigantes do mercado imobiliário",
    "evento imobiliário 2026",
    "Altemir Rocha",
    "corretor de imóveis",
    "treinamento imobiliário",
    "Balneário Camboriú",
    "imersão imobiliária",
    "vendas imóveis",
    "IBRACIV",
    "Corretor Vencedor",
    "evento corretores 2026",
    "mercado imobiliário Brasil",
    "gestão imobiliária",
    "alta performance imobiliária",
  ],
  authors: [{ name: "Altemir Rocha" }],
  creator: "IBRACIV",
  publisher: "IBRACIV",
  category: "event",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/imersao.favi.png",
    apple: "/imersao.favi.png",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: BASE_URL,
    siteName: "Gigantes do Mercado Imobiliário",
    title: "Gigantes do Mercado Imobiliário",
    description:
      "O evento que entrega a maior inteligência de conversão de vendas do mercado imobiliário. 2 dias de imersão com Altemir Rocha em Balneário Camboriú, 15 e 16 de outubro de 2026.",
    images: [
      {
        url: "/banner.jpeg",
        width: 1200,
        height: 630,
        alt: "Gigantes do Mercado Imobiliário 2026 — Balneário Camboriú",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gigantes do Mercado Imobiliário",
    description:
      "O evento que entrega a maior inteligência de conversão de vendas do mercado imobiliário. 2 dias de imersão com Altemir Rocha em Balneário Camboriú, 15 e 16 de outubro de 2026.",
    images: ["/banner.jpeg"],
  },
}

const eventJsonLd = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "Gigantes do Mercado Imobiliário 2026",
  description:
    "O maior evento de transformação em vendas do mercado imobiliário do Brasil. Dois dias de treinamento intensivo com técnicas de vendas, fortalecimento emocional e gestão de equipes de alta performance.",
  startDate: "2026-10-15T08:00:00-03:00",
  endDate: "2026-10-16T20:00:00-03:00",
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  location: {
    "@type": "Place",
    name: "Balneário Camboriú",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Balneário Camboriú",
      addressRegion: "SC",
      addressCountry: "BR",
    },
  },
  image: [`${BASE_URL}/banner.jpeg`],
  url: BASE_URL,
  organizer: {
    "@type": "Organization",
    name: "IBRACIV — Instituto Brasileiro de Aperfeiçoamento para Corretores, Imobiliárias e Vendedores",
    url: BASE_URL,
  },
  performer: {
    "@type": "Person",
    name: "Altemir Rocha",
    jobTitle: "Mentor e Palestrante de Vendas Imobiliárias",
    description:
      "Maior gerador de corretores e imobiliárias de sucesso no Brasil. Mais de 20 mil corretores treinados e R$ 2 bilhões em vendas.",
  },
  offers: [
    {
      "@type": "Offer",
      name: "Passaporte Light",
      price: "797.00",
      priceCurrency: "BRL",
      availability: "https://schema.org/InStock",
      url: `${BASE_URL}/#ingressos`,
      validFrom: "2026-01-01",
    },
    {
      "@type": "Offer",
      name: "Passaporte Premium",
      price: "997.00",
      priceCurrency: "BRL",
      availability: "https://schema.org/InStock",
      url: `${BASE_URL}/#ingressos`,
      validFrom: "2026-01-01",
    },
    {
      "@type": "Offer",
      name: "Passaporte Experiência Alto Padrão",
      price: "3997.00",
      priceCurrency: "BRL",
      availability: "https://schema.org/InStock",
      url: `${BASE_URL}/#ingressos`,
      validFrom: "2026-01-01",
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={`${montserrat.variable} ${dancingScript.variable} ${montserrat.className}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(eventJsonLd) }}
        />
        <Script src="https://fast.wistia.com/assets/external/E-v1.js" strategy="afterInteractive" />
        <SmoothScroll />
        {children}
      </body>
    </html>
  )
}
