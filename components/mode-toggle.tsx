"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ModeToggle() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, theme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="hidden group h-6 w-6 items-center justify-center rounded-md border text-muted-foreground sm:flex hover:bg-accent hover:text-accent-foreground"
    >
      <span className="sr-only">Toggle dark/light mode</span>
      {theme !== "dark" ? <Moon className="h-4 w-4 group-hover:rotate-[360deg] duration-300" /> : <Sun className="h-4 w-4 group-hover:rotate-180 duration-300" />}
    </button>
  );
}
