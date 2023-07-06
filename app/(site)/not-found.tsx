"use client"

import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export default function NotFound() {
  const router = useRouter()

  return (
    <div className="text-center justify-center items-center mb-16">
      <span className="font-extrabold leading-none text-transparent text-[10rem] bg-clip-text bg-gradient-to-b from-foreground to-transparent">404</span>
      <h2 className="font-heading text-2xl my-2 font-bold">Something&apos;s missing</h2>
      <p>Sorry, the page you are looking for doesn&apos;t exist or has been moved.</p>
      <div className="flex gap-2 justify-center mt-8">
        <Button onClick={() => router.back()} variant="default" size="lg">Go back</Button>
        <Button onClick={() => router.push("/")} variant="ghost" size="lg">Back to Home</Button>
      </div>
    </div>
  )
}