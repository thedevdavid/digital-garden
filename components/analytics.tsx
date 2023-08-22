import Script from "next/script";
import { Analytics as VercelAnalytics } from "@vercel/analytics/react";

import siteMetadata from "@/lib/metadata";

export const Analytics = () => {
  if (process.env.NODE_ENV === "production") {
    switch (siteMetadata.analyticsProvider) {
      case "umami":
        return (
          <Script
            async
            defer
            data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
            src={process.env.NEXT_PUBLIC_UMAMI_SCRIPT_URL || "https://analytics.umami.is/script.js"}
          />
        );
      case "plausible":
        return (
          <Script
            async
            defer
            data-domain={process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN}
            src={process.env.NEXT_PUBLIC_PLAUSIBLE_SCRIPT_URL || "https://plausible.io/js/plausible.js"}
          />
        );
      case "google":
        return (
          <>
            <Script
              async
              defer
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`}
            />

            <Script strategy="afterInteractive" id="ga-script">
              {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}');
        `}
            </Script>
          </>
        );
      case "vercel":
        return <VercelAnalytics />;
      default:
        return null;
    }
  }
};
