import { Badge } from "@/components/ui/badge";

export function WorkAvailabilityBadge() {
  return (
    <Badge
      variant="outline"
      className="border-accent-foreground bg-transparent text-primary transition-colors duration-150 hover:bg-accent-foreground hover:text-white max-w-full backdrop-blur-md"
    >
      <div className="bg-green-500/50 dark:bg-green-400/50 rounded-full animate-pulse h-[14px] w-[14px] flex aspect-square mr-1" aria-hidden="true">
        <div className="h-2 w-2 m-auto rounded-full bg-green-500 dark:bg-green-400"></div>
      </div>
      <span className="whitespace-nowrap">I&apos;m available for work</span>
    </Badge>
  );
}
