"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { DialogProps } from "@radix-ui/react-alert-dialog";
import { Calendar, Mail, Monitor, Pencil, Twitter, User, Youtube } from "lucide-react";

import siteMetadata, { defaultAuthor } from "@/lib/metadata";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";

export function CommandDialogComponent({ ...props }: DialogProps) {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && e.metaKey) {
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [open, router]);

  const runCommand = React.useCallback((command: () => unknown) => {
    setOpen(false);
    command();
  }, []);

  return (
    <>
      <Button
        variant="ghost"
        className={cn(
          "relative h-9 w-full justify-start rounded-[0.5rem] text-sm text-muted-foreground sm:pr-12 md:w-40 lg:w-64"
        )}
        onClick={() => setOpen(true)}
        {...props}
      >
        <span className="inline-flex">Search...</span>
        <kbd className="pointer-events-none absolute right-1.5 top-2 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Content">
            <CommandItem
              onSelect={() => {
                runCommand(() => router.push("/posts" as string));
              }}
            >
              <Pencil className="mr-2 h-4 w-4" />
              <span>Blog</span>
            </CommandItem>
            <CommandItem
              onSelect={() => {
                runCommand(() => router.push("/uses" as string));
              }}
            >
              <Monitor className="mr-2 h-4 w-4" />
              <span>Uses</span>
            </CommandItem>
            <CommandItem
              onSelect={() => {
                runCommand(() => router.push("/now" as string));
              }}
            >
              <Calendar className="mr-2 h-4 w-4" />
              <span>Now</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Social">
            <CommandItem
              onSelect={() => {
                runCommand(() => window.open(defaultAuthor.social.twitter, "_blank"));
              }}
            >
              <Twitter className="mr-2 h-4 w-4" />
              <span>Twitter</span>
            </CommandItem>
            <CommandItem
              onSelect={() => {
                runCommand(() => window.open(defaultAuthor.social.youtube, "_blank"));
              }}
            >
              <Youtube className="mr-2 h-4 w-4" />
              <span>YouTube</span>
            </CommandItem>
            <CommandItem
              onSelect={() => {
                runCommand(() => window.open(siteMetadata.newsletterUrl, "_blank"));
              }}
            >
              <Mail className="mr-2 h-4 w-4" />
              <span>Newsletter</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
