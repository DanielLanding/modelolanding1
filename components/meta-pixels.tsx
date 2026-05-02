import Script from "next/script"

export function MetaPixels() {
  return (
    <>
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
      <noscript><img height="1" width="1" style={{ display: "none" }} src="https://www.facebook.com/tr?id=2199546020184959&ev=PageView&noscript=1" alt="" /></noscript>

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
      <noscript><img height="1" width="1" style={{ display: "none" }} src="https://www.facebook.com/tr?id=563727482381234&ev=PageView&noscript=1" alt="" /></noscript>

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
      <noscript><img height="1" width="1" style={{ display: "none" }} src="https://www.facebook.com/tr?id=2411095466012755&ev=PageView&noscript=1" alt="" /></noscript>
    </>
  )
}
