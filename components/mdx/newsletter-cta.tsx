import { cn } from "@/lib/utils";

import NewsletterSubscribe from "../newsletter-subscribe";
import type { CTAProps } from "../newsletter-subscribe";

export function NewsletterCTA({ className, ...props }: CTAProps & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <NewsletterSubscribe
      className={cn(
        "not-prose mx-auto my-6 rounded-xl bg-primary/5 py-0 text-primary ring-1 ring-primary/20",
        className
      )}
      {...props}
    />
  );
}
