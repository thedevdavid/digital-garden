"use client";

import React from "react";
import Link from "next/link";
import { Github, Instagram, Linkedin, Mail, Twitter, Youtube } from "lucide-react";

import siteMetadata, { defaultAuthor } from "@/lib/metadata";
import { CopyButton } from "@/components/copy-button";
import { Signature } from "@/components/signature";

import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="mx-auto flex max-w-6xl flex-col items-center gap-6 border-t py-6">
      <Signature />
      <div className="container flex flex-col items-center justify-between space-y-5 text-center lg:flex-row lg:space-y-0 lg:text-left">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0 lg:order-2">
          <div className="flex flex-row space-x-2 text-sm text-muted-foreground">
            <Button asChild variant="ghost" size="icon" className="hover:text-foreground">
              <Link href={defaultAuthor.social.twitter} target="_blank">
                <Twitter />
                <span className="sr-only">Go to my Twitter profile</span>
              </Link>
            </Button>
            <Button asChild variant="ghost" size="icon" className="hover:text-foreground">
              <Link href={defaultAuthor.social.youtube} target="_blank">
                <Youtube />
                <span className="sr-only">Go to my Youtube channel</span>
              </Link>
            </Button>
            <Button asChild variant="ghost" size="icon" className="hover:text-foreground">
              <Link href={defaultAuthor.social.github} target="_blank">
                <Github />
                <span className="sr-only">Go to my Github profile</span>
              </Link>
            </Button>
            <Button asChild variant="ghost" size="icon" className="hover:text-foreground">
              <Link href={defaultAuthor.social.instagram} target="_blank">
                <Instagram />
                <span className="sr-only">Go to my Instagram profile</span>
              </Link>
            </Button>
            <Button asChild variant="ghost" size="icon" className="hover:text-foreground">
              <Link href={defaultAuthor.social.linkedin} target="_blank">
                <Linkedin />
                <span className="sr-only">Go to my LinkedIn profile</span>
              </Link>
            </Button>
            <CopyButton size="icon" variant="ghost" className="hover:text-foreground" copyText={defaultAuthor.email}>
              <Mail />
              <span className="sr-only">Email address</span>
            </CopyButton>
          </div>
        </div>
        <div className="flex flex-col gap-4 px-8 md:gap-2 md:px-0 lg:order-1">
          <p className="text-sm text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} Built by {defaultAuthor.name}. &nbsp;
            <a
              href={defaultAuthor.social.twitter}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              {defaultAuthor.handle}
            </a>
          </p>
          <p className="text-sm text-muted-foreground md:text-left">
            Source code available on{" "}
            <a
              href={siteMetadata.siteRepo}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              GitHub
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
