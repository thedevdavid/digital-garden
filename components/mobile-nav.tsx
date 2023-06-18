"use client";

import * as React from "react";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import { Menu } from "lucide-react";

import siteMetadata from "@/lib/metadata";
import { navigationLinks } from "@/lib/navigation-links";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function MobileNav() {
  const [open, setOpen] = React.useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="mr-2 px-0 hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent size="content" position="bottom" className="pr-0">
        <MobileLink href="/" className="flex items-center" onOpenChange={setOpen}>
          <span className="font-bold">{siteMetadata.title.default}</span>
        </MobileLink>
        <ScrollArea className="my-4 max-h-96 overflow-y-scroll pb-10">
          <div className="flex flex-col space-y-3">
            {navigationLinks?.map((item) =>
              item.content ? (
                <div className="order-1 mt-3 flex flex-col space-y-3" key={item.title.trim()}>
                  <p className="font-bold">{item.title}</p>
                  {item.content.map((subItem) => (
                    <MobileLink key={subItem.href} href={subItem.href} onOpenChange={setOpen}>
                      {subItem.title}
                    </MobileLink>
                  ))}
                </div>
              ) : (
                <MobileLink key={item.href} href={item.href as string} onOpenChange={setOpen}>
                  {item.title}
                </MobileLink>
              )
            )}
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}

interface MobileLinkProps extends LinkProps {
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
  className?: string;
}

function MobileLink({ href, onOpenChange, className, children, ...props }: MobileLinkProps) {
  const router = useRouter();
  return (
    <Link
      href={href}
      onClick={() => {
        router.push(href.toString());
        onOpenChange?.(false);
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </Link>
  );
}
