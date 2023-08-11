import { Badge } from "@/components/ui/badge";

export function WorkAvailabilityBadge() {
  return (
    <Badge
      variant="outline"
      className="max-w-full border-accent-foreground bg-transparent text-primary backdrop-blur-md transition-colors duration-150 hover:bg-accent-foreground hover:text-white"
    >
      <div
        className="mr-1 flex aspect-square h-[14px] w-[14px] animate-pulse rounded-full bg-green-500/50 dark:bg-green-400/50 sm:m-0 md:mr-1"
        aria-hidden="true"
      >
        <div className="m-auto h-2 w-2 rounded-full bg-green-500 dark:bg-green-400"></div>
      </div>
      <span className="inline whitespace-nowrap sm:hidden md:inline">I&apos;m available for work</span>
    </Badge>
  );
}
