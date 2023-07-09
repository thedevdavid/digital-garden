"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const SCROLL_OFFSET: number = 1550;

export const BackTopButton = () => {
  let [show, setShow] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    let handleWindowScroll = () => {
      if (window.scrollY > SCROLL_OFFSET) setShow(true);
      else setShow(false);
    };

    window.addEventListener("scroll", handleWindowScroll);
    return () => window.removeEventListener("scroll", handleWindowScroll);
  }, []);

  return (
    <Button
      variant="default"
      size="icon"
      aria-label="Scroll To Top"
      type="button"
      onClick={handleClick}
      className={cn(show ? "flex" : "hidden", "fixed bottom-8 right-8 z-50")}
    >
      <ArrowUp />
    </Button>
  );
};
