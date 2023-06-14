"use client";

import * as React from "react";

import { defaultAuthor } from "@/lib/metadata";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface HeroProps {
  title: string;
  subtitle?: string;
}

export function HeroSimple({ title, subtitle }: HeroProps) {
  return (
    <div className="container flex max-w-5xl flex-col items-center justify-center py-32 text-center">
      <h1 className="mb-2 font-heading text-5xl font-bold leading-tight tracking-tight sm:text-6xl">{title}</h1>
      <div className="flex content-center items-center justify-center">
        <Avatar>
          <AvatarImage className="border-blac rounded-full border" src="/avatar.png" />
          <AvatarFallback>{defaultAuthor.name}</AvatarFallback>
        </Avatar>
        <p className="ml-2 font-bold text-muted-foreground">{defaultAuthor.handle}</p>
      </div>
    </div>
  );
}
