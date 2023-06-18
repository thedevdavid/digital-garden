// Component inspired by Julien https://www.julienthibeaut.xyz/blog/create-modern-spotlight-effect-with-react-css
"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";

import { AspectRatio } from "@/components/ui/aspect-ratio";

interface SpotlightCardProps {
  title: string;
  description: string;
  mediaSrc: string;
  mediaType: string;
  href: string;
}

export const SpotlightCard = ({ title, description, mediaSrc, mediaType, href }: SpotlightCardProps) => {
  const { theme } = useTheme();
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current || isFocused) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={divRef}
      onClick={() => window.open(href, "_blank")}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative flex cursor-pointer flex-col justify-start overflow-hidden rounded-md border border-slate-200 bg-gradient-to-r from-slate-100  to-slate-50 shadow-md dark:border-slate-800 dark:from-slate-900 dark:to-slate-950"
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(500px circle at ${position.x}px ${position.y}px, ${
            theme !== "dark" ? "hsla(0,0%,60%,.1)" : "hsla(360,100%,100%,.06)"
          }, transparent 40%)`,
        }}
      />

      <AspectRatio ratio={16 / 9}>
        {mediaType === "video" ? (
          <video autoPlay loop muted playsInline className="m-0 p-0">
            <source src="/project-garden.webm" type="video/webm" />
            <source src="/project-garden.mp4" type="video/mp4" />
          </video>
        ) : (
          <Image src={mediaSrc} alt={title} width={960} height={540} className="m-0 p-0" />
        )}
      </AspectRatio>
      <div className="p-6">
        <h2 className="mb-2 line-clamp-1 font-medium tracking-tight text-foreground">{title}</h2>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};
