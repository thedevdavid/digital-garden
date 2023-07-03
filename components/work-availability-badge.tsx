import { Badge } from "@/components/ui/badge";

export function WorkAvailabilityBadge() {
  return (
    <Badge
      variant="outline"
      className="border-accent-foreground bg-background text-primary transition-colors duration-150 hover:bg-accent-foreground hover:text-white"
    >
      🟢 I&apos;m available for work
    </Badge>
  );
}
