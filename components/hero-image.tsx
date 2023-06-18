"use client";

import * as React from "react";
import Image from "next/image";

import { defaultAuthor } from "@/lib/metadata";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface HeroProps {
  title: string;
  subtitle: string;
}

export function HeroImage({ title, subtitle }: HeroProps) {
  return (
    <div className="container flex max-w-6xl flex-col items-center md:flex-row">
      <div className="mb-4 flex max-w-xl self-start sm:hidden">
        <Avatar>
          <AvatarImage className="rounded-full border border-primary" src="/avatar.png" />
          <AvatarFallback>{defaultAuthor.name}</AvatarFallback>
        </Avatar>
      </div>
      <div className="flex max-w-xl flex-col lg:mr-auto">
        <h1 className="font-heading text-5xl font-bold tracking-tight sm:text-6xl">{title}</h1>
        <h2 className="mt-6 font-heading text-lg text-muted-foreground">{subtitle}</h2>
      </div>
      <div className="hidden w-4/12 lg:block">
        <AspectRatio ratio={9 / 14}>
          <Image
            src="/avatar-hero-image.jpg"
            alt={defaultAuthor.name}
            width={400}
            height={580}
            className="rounded-lg bg-black object-cover shadow-lg"
          />
        </AspectRatio>
      </div>
    </div>
  );
}
