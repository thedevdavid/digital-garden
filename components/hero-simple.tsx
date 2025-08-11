"use client";

import * as React from "react";

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
        <p className="font-bold text-muted-foreground">{defaultAuthor.handle}</p>
      </div>
    </div>
  );
}
