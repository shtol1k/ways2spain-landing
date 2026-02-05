'use client'

import Script from 'next/script'

const GTM_ID = 'GTM-W735T3PS'

// Enable GTM only in production to avoid polluting analytics with dev traffic
const isGTMEnabled =
  typeof window !== 'undefined'
    ? window.location.hostname === 'ways2spain.com' ||
      window.location.hostname === 'www.ways2spain.com'
    : process.env.NODE_ENV === 'production'

export function GoogleTagManagerHead() {
  if (!isGTMEnabled) {
    return null
  }

  return (
    <Script
      id="gtm-script"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${GTM_ID}');
        `,
      }}
    />
  )
}

export function GoogleTagManagerBody() {
  if (!isGTMEnabled) {
    return null
  }

  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
        height="0"
        width="0"
        style={{ display: 'none', visibility: 'hidden' }}
      />
    </noscript>
  )
}
