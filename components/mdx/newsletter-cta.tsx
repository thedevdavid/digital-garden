import { cn } from "@/lib/utils";

import NewsletterSubscribe from "../newsletter-subscribe";
import type { CTAProps } from "../newsletter-subscribe";

export function NewsletterCTA({ className, ...props }: CTAProps & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <NewsletterSubscribe
      className={cn(
        "not-prose mx-auto my-6 rounded-3xl bg-[radial-gradient(rgba(0,0,0,0.3)_0.5px,transparent_0.5px)] py-0 text-primary ring-1 ring-primary/20 [background-size:12px_12px] dark:bg-[radial-gradient(rgba(255,255,255,0.3)_0.5px,transparent_0.5px)]",
        className
      )}
      {...props}
    />
  );
}
