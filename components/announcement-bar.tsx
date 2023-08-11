import { Rocket, XIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

type AnnouncementBarProps =
  | {
      children: React.ReactNode;
      ctaText: string;
      ctaURL: string;
    }
  | {
      children: React.ReactNode;
      ctaText?: never;
      ctaURL?: never;
    };

// type AnnouncementBarProps = {
//   children: React.ReactNode;
//   ctaText?: string;
//   ctaURL?: string;
// };

export const AnnouncementBar = ({ children, ctaText, ctaURL }: AnnouncementBarProps) => (
  <div className="fixed inset-x-0 top-0 z-50 flex bg-foreground px-4 py-2 text-center text-sm text-background sm:bottom-0 sm:top-auto sm:h-28 sm:text-left md:h-20 lg:h-12">
    <div className="container mx-auto flex max-w-6xl flex-col items-center justify-between md:flex-row">
      <div className="mb-4 flex flex-wrap items-center justify-center md:mb-0 md:justify-start">{children}</div>
      <div className="flex items-center justify-center">
        {ctaText && (
          <Button variant="secondary" asChild className="mr-2">
            <a href={ctaURL} target="_blank">
              {ctaText}
            </a>
          </Button>
        )}
        <Button variant="link" size="icon" className="absolute right-0 top-0 text-primary-foreground md:static">
          <XIcon className="h-3 w-3" />
        </Button>
      </div>
    </div>
  </div>
);
