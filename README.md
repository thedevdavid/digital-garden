# Modern Developer Blog Template (Digital Garden Starter)

![GardenPromo](/screenshots/garden-promo.jpg)
[More screenshots here](/screenshots/)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fthedevdavid%2Fdigital-garden%2F)

An open source blogging (digital gardening) template for developers using [Next.js](https://nextjs.org/) app router, MDX, [Contentlayer](https://contentlayer.dev/), [Tailwind CSS](https://tailwindcss.com/), [@shadcn/ui](https://ui.shadcn.com/) , [Lucide Icons](https://lucide.dev/icons), and more.

If you love this template and/or use it, please give it a star on GitHub. This will help more people discover it, thus help improving the template.

![GitHub Repo stars](https://img.shields.io/github/stars/thedevdavid/digital-garden?style=social)

**Note: This project is always evolving and it's far from being perfect or even done.** I'm always open to suggestions and contributions. Feel free to open an issue or a PR if you have any ideas or suggestions. You can also see the [roadmap](#features--roadmap) for planned features if you want to contribute.

## Table of Contents

- [Motivation](#motivation)
- [Getting Started](#getting-started)
  - [Writing content](#writing-content)
    - [Frontmatter](#frontmatter)
  - [Deployment](#deployment)
- [Customization](#customization)
  - [Fonts](#fonts)
  - [Colors](#colors)
  - [Signature](#signature)
  - [Images](#images)
    - [Homepage Avatar](#homepage-avatar)
  - [Metadata](#metadata)
    - [Navigation](#navigation)
    - [Social links](#social-links)
  - [Analytics](#analytics)
    - [Vercel](#vercel)
    - [Umami](#umami)
    - [Plausible](#plausible)
    - [Google Analytics](#google-analytics)
    - [Other analytics providers](#other-analytics-providers)
  - [Newsletter subscription](#newsletter-subscription)
    - [MailerLite](#mailerlite)
    - [Other newsletter providers](#other-newsletter-providers)
  - [Hero section](#hero-section)
  - [Other tips & tricks](#other-tips--tricks)
    - [Image optimization](#image-optimization)
- [Examples](#examples)
- [Features & Roadmap](#features--roadmap)
- [Contributing](#contributing)
  - [Contributors](#contributors)
  - [How?](#how)
- [Inspiration & Mentions](#inspiration--mentions)
- [Support](#support)

## Motivation

As a developer who creates content, I want to have a blog & digital garden where I can share my thoughts and ideas with the world. Now, there's not really a "perfect solution" for this currently. With included analytics, SEO, email subscriptions, modern tooling, simple design, etc. We either have to build one from scratch, use a design template and code the features, or use a CMS/no-code tool.

So I decided to build a solution that I would use myself. This is the result.

## Getting Started

If you want to see how I set up this template for my own digital garden, you can check out [this commit](https://github.com/thedevdavid/website-2023/commit/fb10942d424a1389f9c4c1605849e45ff718656d) with all the changes.

1. Use the repo as a template
2. Install dependencies with `pnpm install`
3. Edit `utils/metadata.ts` with your information and general settings
4. Edit `utils/uses-data.ts` with software & hardware you use
5. Edit `utils/projects-data.ts` with your projects
6. Edit `utils/navigation-links.ts` with the links you want in the navigation
7. Edit `content/pages/now` with your availability
8. Edit `content/pages/about` with your bio
9. Run the development server with `pnpm dev`

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Writing content

You can write content in Markdown or MDX. The content is located in `content/` and is organized in folders. The `pages` folder contains the pages. The `posts` folder contains the blogposts. The `projects` folder contains the projects.

Editing list pages is done in the `lib` folder.

- `/uses` - `lib/uses-data.ts`
- `/projects` - `lib/projects-data.ts`
- `/social` - `lib/social-data.ts`

#### Frontmatter

Frontmatter is used to define metadata for pages and posts. It's located at the top of the file and is written in YAML. You can define the following fields:

- `title` - The title of the page/post
- `description` - The description of the page/post
- `publishedDate` - The date of the post (not used on pages)
- `lastUpdatedDate` - The date of the page/post
- `tags` - List of tags for the post. You can add new tags by adding them to the `tagOptions` list. (not used on pages)
- `series` - The series of the post. A series has a title and an order number for a post. (not used on pages)
- `author` - The author of the post. An author has a name, and image. (not used on pages)
- `status` - Whether the page/post is published or draft

### Deployment

You can deploy the project with [Vercel](https://vercel.com/) or any other hosting provider. If you want to use Vercel, you can use the button at the top of this README.

1. Update `package.json` author information
2. Publish your repo to GitHub
3. Create a new project on Vercel and import your repo
4. Set up the `NEXT_PUBLIC_BASE_URL` environment variable on Vercel to point to your website's root URL
5. If you plan to use [analytics](#analytics) and/or [newsletter](#newsletter-subscription) providers, set up the respective environment variables on Vercel
6. Build and deploy 🎉

## Customization

### Fonts

This project uses [Inter](https://rsms.me/inter/) as the default font. You can change it on `app/layout.tsx` using the `next/fonts` package.

### Colors

The project uses Tailwind colors and @shadcn/ui config. Customize the colors on `globals.css`.

### Signature

There's a signature component to use in the footer. You can edit the signature on `components/signature.tsx`. I used Figma to write the signature with `Caveat` font and exported it as SVG. You can do the same and update the SVG in the component.

### Images

Images and other media files are located in `public/` directory. You can use them in your content by using the `/<filename>.<ext>` path.

#### Homepage Avatar

Here's a quick tutorial on how to make a similar avatar in Figma in under 2 minutes. [https://youtu.be/Ny-VaEEhJKM](https://youtu.be/Ny-VaEEhJKM)

### Metadata

You can change the metadata and author details in `utils/metadata.ts`. This will be used around the site for titles, social links, social handles, SEO, etc.

#### Navigation

You can edit navigation links in `lib/navigation-links.ts`.

#### Social links

You can edit social links in `lib/social-data.ts`. You can also add new social links by adding them to the file and using the platform name as the key and the URL as the value. The `SocialButton` component will automatically add the icon for the platform if it's supported in [simple-icons](https://simpleicons.org/).

### Analytics

#### Vercel

To configure, you need to enable it on [Vercel project dashboard](https://vercel.com/dashboard) by selecting your Project and then click the Analytics tab and click Enable from the dialog.

#### Umami

Umami is a simple, easy to use, web analytics solution with self-hosting option! You can read more about it on [Umami website](https://umami.is/). _(Hint: On [Railway](https://railway.app), you can self-host it low cost or even free)_.

Configure:
Set `NEXT_PUBLIC_UMAMI_SCRIPT_URL` & `NEXT_PUBLIC_UMAMI_WEBSITE_ID` environment variables on your `.env.local` file and on Vercel dashboard.

#### Plausible

Plausible is a simple, lightweight, open-source alternative to Google Analytics. You can read more about it on [Plausible website](https://plausible.io/).

Configure:
Set `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` & `NEXT_PUBLIC_PLAUSIBLE_SCRIPT_URL` environment variables on your `.env.local` file and on Vercel dashboard. If you're concerned about ad blockers, you can proxy the plausible script through your own domain. You can read more about it [here](https://plausible.io/docs/proxy/guides/nextjs).

#### Google Analytics

Google Analytics is a web analytics service offered by Google that tracks and reports website traffic, currently as a platform inside the Google Marketing Platform brand. You can read more about it on [Google Analytics website](https://analytics.google.com/).

Configure:
Set `NEXT_PUBLIC_GOOGLE_ANALYTICS_ID` environment variable on your `.env.local` file and on Vercel dashboard.

#### Other analytics providers

Supporting other analytics providers are in progress. Feel free to open an issue if you have any suggestions or a PR if you want to implement it yourself.

### Newsletter subscription

#### MailerLite

MailerLite is a simple email marketing tool for all types of businesses. You can read more about it on [MailerLite website](https://www.mailerlite.com/).

Configure:
Set `EMAIL_API_BASE`, `EMAIL_API_KEY`, and `EMAIL_GROUP_ID` environment variables on your `.env.local` file and on Vercel dashboard.

#### Other newsletter providers

Supporting other newsletter providers are in progress. Feel free to open an issue if you have any suggestions or a PR if you want to implement it yourself.

### Hero section

You can choose between 3 different hero variants to use in `app/(site)/page.tsx` by changing the imported hero component.

1. `HeroSimple` - A simple centered hero section with image, title, and subtitle.
2. `HeroVideo` - 2 column hero section with Videoask embed on one side and title and subtitle on the other.
3. `HeroImage` - 2 column hero section with image on one side and title, and subtitle on the other.
4. `HeroMinimal` - small hero section name & job title

### Other tips & tricks

#### Image optimization

I recommend optimizing images fast for free with [ImageOptim](https://imageoptim.com/mac). Install on your Mac, then open the `public` folder in Finder. Select all images, right-click, and choose "Open with > ImageOptim". This will optimize all images in the folder.

Note: DO NOT overdo it. You can easily make images look bad with lossy compression algorithms.

## Examples

- [https://davidlevai.com/](https://davidlevai.com/) - My own digital garden
- [Dragons and Codes Digital Garden](https://dragonsandcodes.com) - Simple modifications [Source](https://github.com/dragonsandcodes/digital-garden-v2)
- [Shafie Mukhre's Blog](https://shafiemukhre.com) - [Source](https://github.com/shafiemukhre/website-2023)
- [Praveen kumars's Blog](https://sumandeepuniversity.org) - [Source](https://github.com/gramythedj/digital-garden)
- [Steven Selolo's Blog](https://stevenselolo.com/) - [Source](https://github.com/StevenPss/website-2023)
- [Marton's Blog](https://www.martondobos.com/) - [Source](https://github.com/dobosmarton/digital-garden)


**Create a PR and add your blog to this list if you're using the template!**

## Features & Roadmap

- [x] Basic functionality of reading pages and posts
- [x] Basic design dark/light mode
- [x] MDX code highlighting
- [x] Readme.md
- [x] `robots.txt` & `sitemap.xml`
- [x] RSS Feed
- [x] Reading time estimate
- [x] LICENSE
- [x] contributing.md
- [x] MDX components (TOC & footnotes)
- [x] general config & metadata (author, URL, socials, etc.)
- [x] uses page
- [x] Link in bio page
- [x] OG image generation
- [x] projects page
- [x] about section on homepage
- [x] search & command bar
- [x] Analytics: Vercel, Umami, Plausible, Google Analytics
- [x] Post series
- [x] Not found page
- [x] contributing docs
- [x] Docs refresh
- [x] Back to top button
- [x] Social icons component
- [x] Social sharing buttons
- [x] Tags
- [x] newsletter integration (form, api route, keys, thank you/welcome page, MailerLite provider)
- [x] more MDX components (katex, math)
- [x] author content definition
- [x] SEO improvements
- [ ] Other newsletter providers (Convertkit, Substack, Buttondown, Mailchimp, etc)
- [ ] Other analytics providers (fathom, simplelytics, etc)
- [ ] RTL Support
- [ ] Post series page
- [ ] prev/next post links
- [ ] related/similar posts
- [ ] Donate component & page
- [ ] CLI and/or recipes
- [ ] Newsletter previous issues page
- [ ] Layouts/templates system
- [ ] Notion data source
- [ ] Sanity data source
- [ ] Design improvements (whitespace, layout, etc.)
- [ ] lightbox for images
- [ ] implement content security policies
- [ ] Code preview component
- [ ] Code highlight improvements (copy code, theme)
- [ ] Rich project cards
- [ ] Landing page/offer page/freebie page
- [ ] CV template
- [ ] Authenticated pages and/or hidden content (behind email address)
- [ ] 100 lighthouse score
- [ ] Command bar fuzzy search in content
- [ ] Accessibility audit
- [ ] more MDX components (oembed)
- [ ] error, and loading pages
- [ ] TypeScript fixes
- [ ] Redesign social page (link in bio)
- [ ] Redesign uses page
- [ ] Redesign projects page
- [ ] general refactor
- [ ] general cleanup
- [ ] implement a videoask-like solution for the hero section
- [ ] RSS feed improvements (image, description, etc.)
- [ ] custom admin CMS(?)
- [ ] hero title and subtitle text HTML support(?)
- [ ] Pagination (?)
- [ ] multi-author support (?)
- [ ] Post like counter (?)
- [ ] Visitor counter (?)
- [ ] code playground instead of code highlighting (?)
- [ ] Commenting system (?)
- [ ] keyboard-based navigation with hotkeys (?)
- [ ] multilang support (?)

## Contributing

### Contributors

- [@thedevdavid](https://twitter.com/thedevdavid)
- [@br4adam](https://github.com/br4adam)

This project is from developers for developers. All contributions are welcome! Please feel free to:

- Report a bug
- Discuss the current state and ideas for improvements
- Submit a fix
- Propose new features

### How?

1. Fork the repo and create your branch from `develop`.
2. Add your code.
3. Update the documentation.
4. Make sure your code lints and the app builds.
5. Open pull request to `develop` branch.

Any contributions you make will be under the MIT Software License. In short, when you submit code changes, your submissions are understood to be under the same [MIT License](http://choosealicense.com/licenses/mit/) that covers the project. Code of Conduct can be found [here](https://gist.github.com/thedevdavid/08e306cee9dc1b6b7f3c209827277a82).

## Inspiration & Mentions

- [Delba Oliveira Personal Blog](https://github.com/delbaoliveira/website) - Using and structuring table of contents with Contentlayer
- [timlrx/tailwind-nextjs-starter-blog](https://github.com/timlrx/tailwind-nextjs-starter-blog) - Idea

## Support

If you love this template and/or use it, please give it a star on GitHub.
