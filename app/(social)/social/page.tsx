"use client";

import Image from "next/image";
import Link from "next/link";
import { Github, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

import { defaultAuthor } from "@/lib/metadata";
import { projects } from "@/lib/projectsData";
import { Button } from "@/components/ui/button";
import CTA from "@/components/cta";
import { Signature } from "@/components/signature";
import { SpotlightCard } from "@/components/spotlight-card";

export default async function SocialPage() {
  return (
    <>
      <div className="container py-10">
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center md:flex-row">
            <Image src="/avatar-home.png" alt={defaultAuthor.name} width={200} height={200} />
            <div>
              <h1 className="font-heading text-4xl font-bold">{defaultAuthor.name}</h1>
              <p>{defaultAuthor.handle}</p>
            </div>
          </div>
          <h2 className="mb-2 mt-6 font-heading text-2xl font-bold">My projects</h2>
          <div className="grid items-stretch gap-4 md:grid-cols-2">
            {projects.map((item) => (
              <SpotlightCard key={item.href} {...item} />
            ))}
          </div>
          <h2 className="mb-2 mt-6 font-heading text-2xl font-bold">My socials</h2>
          <div className="flex w-full flex-col space-y-2 text-sm text-muted-foreground">
            <Button variant="default" asChild>
              <Link href={defaultAuthor.social.twitter} target="_blank">
                <Twitter className="h-5 w-5 hover:text-foreground" /> My Twitter profile
              </Link>
            </Button>
            <Button variant="default" asChild>
              <Link href={defaultAuthor.social.youtube} target="_blank">
                <Youtube className="h-5 w-5 hover:text-foreground" /> My Youtube channel
              </Link>
            </Button>
            <Button variant="default" asChild>
              <Link href={defaultAuthor.social.github} target="_blank">
                <Github className="h-5 w-5 hover:text-foreground" /> My Github profile
              </Link>
            </Button>
            <Button variant="default" asChild>
              <Link href={defaultAuthor.social.instagram} target="_blank">
                <Instagram className="h-5 w-5 hover:text-foreground" /> My Instagram profile
              </Link>
            </Button>
            <Button variant="default" asChild>
              <Link href={defaultAuthor.social.linkedin} target="_blank">
                <Linkedin className="h-5 w-5 hover:text-foreground" /> My LinkedIn profile
              </Link>
            </Button>
          </div>
        </div>
        <Signature />
      </div>
      <CTA
        title="I also write deep dives in email"
        description="I write about coding, design, digital nomad life, and solopreneurship. Join over 1,000 other developers in
            getting better in business. Unsubscribe whenever."
        buttonText="Send me the emails"
      />
    </>
  );
}
