"use client";

import Image from "next/image";
import Link from "next/link";
import { Github, Instagram, Linkedin, Mail, Twitter, Youtube } from "lucide-react";

import { defaultAuthor } from "@/lib/metadata";
import { projects } from "@/lib/projects-data";
import { Button } from "@/components/ui/button";
import { CopyButton } from "@/components/copy-button";
import CTA from "@/components/cta";
import { Signature } from "@/components/signature";
import { SpotlightCard } from "@/components/spotlight-card";

export default async function SocialPage() {
  return (
    <>
      <div className="container pt-10">
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center md:flex-row">
            <Image src="/avatar-home.png" alt={defaultAuthor.name} width={200} height={200} />
            <div className="mt-4 text-center md:ml-4 md:text-left">
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
          <div className="mb-4 flex w-full max-w-2xl flex-col space-y-4">
            <Button variant="default" asChild>
              <Link href={defaultAuthor.social.twitter} target="_blank">
                <Twitter /> My Twitter profile
              </Link>
            </Button>
            <Button variant="default" asChild>
              <Link href={defaultAuthor.social.youtube} target="_blank">
                <Youtube /> My Youtube channel
              </Link>
            </Button>
            <Button variant="default" asChild>
              <Link href={defaultAuthor.social.github} target="_blank">
                <Github /> My Github profile
              </Link>
            </Button>
            <Button variant="default" asChild>
              <Link href={defaultAuthor.social.instagram} target="_blank">
                <Instagram /> My Instagram profile
              </Link>
            </Button>
            <Button variant="default" asChild>
              <Link href={defaultAuthor.social.linkedin} target="_blank">
                <Linkedin /> My LinkedIn profile
              </Link>
            </Button>
            <CopyButton variant="default" copyText={defaultAuthor.email}>
              <Mail /> Email address
            </CopyButton>
          </div>
          <Signature />
        </div>
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
