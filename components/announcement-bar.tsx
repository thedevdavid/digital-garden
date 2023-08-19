import { Button } from "@/components/ui/button";

export type AnnouncementBarProps =
  | {
      children: React.ReactNode;
      buttonText: string;
      link: string;
    }
  | {
      children: React.ReactNode;
      buttonText?: never;
      link?: never;
    };

export const AnnouncementBar = ({ children, buttonText, link }: AnnouncementBarProps) => (
  <div className="fixed inset-x-0 top-0 z-50 flex bg-foreground px-4 py-2 text-center text-sm text-background sm:h-28 sm:text-left md:h-20 lg:h-12">
    <div className="container mx-auto flex max-w-6xl flex-col items-center justify-between md:flex-row">
      <div className="mb-4 flex flex-wrap items-center justify-center md:mb-0 md:justify-start">{children}</div>
      <div className="flex items-center justify-center">
        {buttonText && (
          <Button variant="secondary" asChild className="mr-2">
            <a href={link} target="_blank">
              {buttonText}
            </a>
          </Button>
        )}
      </div>
    </div>
  </div>
);
