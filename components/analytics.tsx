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
            src={process.env.NEXT_PUBLIC_UMAMI_SCRIPT_URL}
          />
        );
      case "vercel":
        return <VercelAnalytics />;
      default:
        return null;
    }
  }
};
