"use client";

import React from "react";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, Mail } from "lucide-react";
import { useForm } from "react-hook-form";
import * as z from "zod";

import siteMetadata from "@/lib/metadata";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

export type CTAProps = {
  title: string;
  description?: string;
  buttonText: string;
};

const formSchema = z.object({
  email: z.string().email(),
});

const NewsletterSubscribe = ({
  title,
  description,
  buttonText,
  className,
  ...props
}: CTAProps & React.HTMLAttributes<HTMLDivElement>) => {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const response = await fetch("/newsletter", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: values.email,
      }),
    });

    if (!response?.ok) {
      return toast({
        title: "Something went wrong.",
        description: "The subscription did not happen. Please try again.",
        variant: "destructive",
      });
    }

    return toast({
      title: "🎉 Nice!",
      description: "You'll get the emails now.",
    });
  };

  return (
    <section
      className={cn("relative isolate my-24 overflow-hidden bg-primary py-6 text-primary-foreground", className)}
      {...props}
    >
      <div className="p-8 md:p-12">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="font-heading text-2xl font-bold md:text-3xl">{title}</h2>

          <p className="hidden text-muted-foreground sm:mt-4 sm:block">{description}</p>
        </div>

        <div className="mx-auto mt-8 max-w-xl">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex w-full flex-col gap-3 md:flex-row">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="flex-auto">
                    <FormControl>
                      <Input type="email" placeholder="anakin.skywalker@darksi.de" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" variant="secondary">
                <Mail className="mr-2 h-4 w-4" /> {buttonText}
              </Button>
            </form>
          </Form>
          {siteMetadata.newsletterUrl && (
            <div className="mt-4 flex items-center justify-center">
              <Button asChild variant="ghost">
                <Link href={siteMetadata.newsletterUrl} target="_blank">
                  Let me read it first <ArrowRight className="mr-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          )}
        </div>
      </div>

      <svg
        viewBox="0 0 1024 1024"
        className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2"
        aria-hidden="true"
      >
        <circle cx={512} cy={512} r={512} fill="url(#gradient)" fillOpacity="0.7" />
        <defs>
          <radialGradient
            id="gradient"
            cx={0}
            cy={0}
            r={1}
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(512 512) rotate(90) scale(512)"
          >
            <stop stopColor="#7775D6" />
            <stop offset={1} stopColor="#E935C1" stopOpacity={0} />
          </radialGradient>
        </defs>
      </svg>
    </section>
  );
};

export default NewsletterSubscribe;
