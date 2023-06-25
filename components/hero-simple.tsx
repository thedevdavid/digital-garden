"use client";

import * as React from "react";
import Image from "next/image";

import { defaultAuthor } from "@/lib/metadata";

interface HeroProps {
  title: string;
  subtitle?: string;
}

export function HeroSimple({ title, subtitle }: HeroProps) {
  return (
    <div className="container flex max-w-5xl flex-col items-center justify-center text-center sm:py-20 md:py-32">
      <h1 className="mb-2 font-heading text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
        {title}
      </h1>
      <div className="flex content-center items-center justify-center">
        <Image
          className="aspect-square h-10 w-10 rounded-full border border-black"
          width={40}
          height={40}
          src="/avatar.png"
          alt={defaultAuthor.name}
        />
        <p className="ml-2 font-bold text-muted-foreground">{defaultAuthor.handle}</p>
      </div>
    </div>
  );
}
