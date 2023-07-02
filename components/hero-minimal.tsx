"use client";

import * as React from "react";
import Image from "next/image";

import { defaultAuthor } from "@/lib/metadata";

interface HeroProps {
  title: string;
  subtitle?: string;
}

export function HeroMinimal({ title, subtitle }: HeroProps) {
  return (
    <div className="container flex max-w-6xl flex-col items-start justify-center sm:py-2 md:py-6">
      <Image
        className="aspect-square h-10 w-10 rounded-full border border-black sm:hidden"
        width={40}
        height={40}
        src="/avatar.png"
        alt={defaultAuthor.name}
      />
      <h1 className="font-heading text-2xl font-bold leading-tight tracking-tight">{defaultAuthor.name}</h1>
      <p className="text-muted-foreground">{defaultAuthor.jobTitle}</p>
      <p className="my-2 text-muted-foreground">{title}</p>
    </div>
  );
}
