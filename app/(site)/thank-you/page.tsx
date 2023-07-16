"use client";

import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

export default function ThankYou() {
  const router = useRouter();

  return (
    <div className="mb-16 items-center justify-center text-center">
      <span className="bg-gradient-to-b from-foreground to-transparent bg-clip-text text-[10rem] font-extrabold leading-none text-transparent">
        Thank You!
      </span>
      <h2 className="my-2 font-heading text-2xl font-bold">Welcome to the newsletter</h2>
      <p>You&apos;re now receiving.</p>
      <div className="mt-8 flex justify-center gap-2">
        <Button onClick={() => router.back()} variant="default" size="lg">
          Go back
        </Button>
        <Button onClick={() => router.push("/")} variant="ghost" size="lg">
          Back to Home
        </Button>
      </div>
    </div>
  );
}
