"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { defaultAuthor } from "@/lib/metadata";
import { cn } from "@/lib/utils";
import { CommandDialogComponent } from "@/components/command-dialog";
import { MobileNav } from "@/components/mobile-nav";
import { ModeToggle } from "@/components/mode-toggle";
import { Navbar } from "@/components/navbar";

export function Navigation() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    if (currentScrollPos > prevScrollPos) {
      setVisible(false);
    } else {
      setVisible(true);
    }

    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <>
      <header
        className={cn(
          "fixed -bottom-32 z-20 mx-auto mb-4 h-12 w-full px-4 animate-out delay-500 sm:static sm:z-auto sm:mb-0 sm:mt-4 sm:h-16 sm:max-w-6xl sm:transition-none sm:delay-0 lg:px-0",
          visible && "bottom-0 left-0 animate-in"
        )}
      >
        <div className="flex items-center rounded-full border border-primary/40 bg-white/30 bg-clip-padding px-4 py-2 shadow-md backdrop-blur-sm sm:container dark:border-white dark:bg-black/30 dark:text-white sm:justify-between sm:rounded-lg">
          <Link href="/" aria-label="Go to Home" className="order-1">
            <Image
              className="aspect-square h-auto w-10 rounded-full border border-black hover:opacity-60"
              width={40}
              height={40}
              src="/avatar.png"
              alt={defaultAuthor.name}
            />
          </Link>
          <div className="order-3 sm:order-2 sm:ml-auto">
            <nav className="ml-auto hidden space-x-6 text-sm font-medium sm:block sm:w-full">
              <Navbar />
            </nav>
            <nav className="sm:hidden">
              <MobileNav />
            </nav>
          </div>
          <div className="order-2 flex w-full items-center sm:order-3 sm:w-fit">
            <CommandDialogComponent />
            <ModeToggle />
          </div>
        </div>
      </header>
    </>
  );
}
