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
      <head>
        {/* PIXEL IBRACIV */}
        <Script id="pixel-ibraciv" strategy="afterInteractive">{`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '2199546020184959');
          fbq('track', 'PageView');
        `}</Script>
        <noscript><img height="1" width="1" style={{ display: "none" }} src="https://www.facebook.com/tr?id=2199546020184959&ev=PageView&noscript=1" /></noscript>

        {/* PIXEL CORRETOR VENCEDOR */}
        <Script id="pixel-corretor-vencedor" strategy="afterInteractive">{`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '563727482381234');
          fbq('track', 'PageView');
        `}</Script>
        <noscript><img height="1" width="1" style={{ display: "none" }} src="https://www.facebook.com/tr?id=563727482381234&ev=PageView&noscript=1" /></noscript>

        {/* PIXEL ALTEMIR ROCHA */}
        <Script id="pixel-altemir-rocha" strategy="afterInteractive">{`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '2411095466012755');
          fbq('track', 'PageView');
        `}</Script>
        <noscript><img height="1" width="1" style={{ display: "none" }} src="https://www.facebook.com/tr?id=2411095466012755&ev=PageView&noscript=1" /></noscript>
      </head>
      <body className={`${montserrat.variable} ${dancingScript.variable} ${montserrat.className}`}>
        <Script src="https://fast.wistia.com/assets/external/E-v1.js" strategy="afterInteractive" />
        <SmoothScroll />
        {children}
      </body>
    </html>
  )
}
