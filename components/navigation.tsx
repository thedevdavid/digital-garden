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
          "fixed -bottom-32 z-20 mx-auto mb-4 h-12 w-full px-4 animate-out delay-500 sm:hidden",
          visible && "bottom-0 left-0 animate-in"
        )}
      >
        <div className="flex items-center justify-center space-x-4 rounded-full border border-primary/40 bg-white/30 bg-clip-padding px-4 py-2 shadow-md backdrop-blur-sm dark:border-white dark:bg-black/30 dark:text-white ">
          <Link href="/" aria-label="Go to Home">
            <Image
              className="aspect-square h-10 w-10 rounded-full border border-black hover:opacity-60"
              width={40}
              height={40}
              src="/avatar.png"
              alt={defaultAuthor.name}
            />
          </Link>
          <CommandDialogComponent />
          <ModeToggle />
          <nav>
            <MobileNav />
          </nav>
        </div>
      </header>
      <header className="mx-auto mt-4 hidden h-16 w-full max-w-6xl px-4 sm:block lg:px-0">
        <div className="container flex items-center justify-between rounded-lg border border-primary/40 bg-white/30 bg-clip-padding px-4 py-2 shadow-md backdrop-blur-sm dark:border-white dark:bg-black/30 dark:text-white">
          <Link href="/" aria-label="Go to Home">
            <Image
              className="aspect-square h-10 w-10 rounded-full border border-black hover:opacity-60"
              width={40}
              height={40}
              src="/avatar.png"
              alt={defaultAuthor.name}
            />
          </Link>
          <nav className="ml-auto space-x-6 text-sm font-medium">
            <Navbar />
          </nav>
          <CommandDialogComponent />
          <ModeToggle />
        </div>
      </header>
    </>
  );
}
