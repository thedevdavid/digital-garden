# Modern Developer Blog Template (Digital Garden Starter)

![Image2](/screenshots/garden2.png)
[More screenshots here](/screenshots/)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/thedevdavid/digital-garden)

An open source blogging (digital gardening) template for developers using [Next.js](https://nextjs.org/) app router, MDX, [Contentlayer](https://contentlayer.dev/), [Tailwind CSS](https://tailwindcss.com/), [@shadcn/ui](https://ui.shadcn.com/) , [Lucide Icons](https://lucide.dev/icons), and more.

This project is from developers for developers. Please feel free to report a bug, discuss the current state, submit ideas for improvements, submit a fix, propose new features, or whatever you want. All contributions are welcome! Read more at the [contributing guidelines](./CONTRIBUTING.md).

If you love this template and/or use it, please give it a star on GitHub. This will help more people discover it, thus help improving the template.

![GitHub Repo stars](https://img.shields.io/github/stars/thedevdavid/digital-garden?style=social)

**Note: This project is always evolving and it's far from being perfect or even done.** I'm always open to suggestions and contributions. Feel free to open an issue or a PR if you have any ideas or suggestions. You can also see the [roadmap](#features--roadmap) for planned features if you want to contribute.

## Table of Contents

- [Motivation](#motivation)
- [Getting Started](#getting-started)
  - [Writing content](#writing-content)
  - [Deployment](#deployment)
- [Customization](#customization)
  - [Fonts](#fonts)
  - [Colors](#colors)
  - [Metadata](#metadata)
  - [Analytics](#analytics)
  - [Newsletter subscription](#newsletter-subscription)
  - [Hero section](#hero-section)
  - [Other tips & tricks](#other-tips--tricks)
    - [Image optimization](#image-optimization)
- [Examples](#examples)
- [Features & Roadmap](#features--roadmap)
- [Inspiration & Mentions](#inspiration--mentions)
- [Support](#support)

## Motivation

As a developer who creates content, I want to have a blog & digital garden where I can share my thoughts and ideas with the world. Now, there's not really a "perfect solution" for this currently. With included analytics, SEO, email subscriptions, modern tooling, simple design, etc. We either have to build one from scratch, use a design template and code the features, or use a CMS/no-code tool.

So I decided to build a solution that I would use myself. This is the result.

## Getting Started

If you want to see how I set up this template for my own digital garden, you can check out [this commit](https://github.com/thedevdavid/website-2023/commit/fb10942d424a1389f9c4c1605849e45ff718656d) with all the changes.

1. Use the repo as a template
2. Install dependencies with `pnpm install`
3. Edit `utils/metadata.ts` with your information
4. Edit `utils/usesData.ts` with your information
5. Edit `utils/projectsData.ts` with your information
6. Edit `content/pages/now` with your information
7. Edit `content/pages/about` with your information
8. Run the development server with `pnpm dev`

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Writing content

You can write content in Markdown or MDX. The content is located in `content/` and is organized in folders. The `pages` folder contains the pages. The `posts` folder contains the blogposts. The `projects` folder contains the projects.

Editing list pages is done in the `lib` folder.

- `/uses` - `lib/uses-data.ts`
- `/projects` - `lib/projects-data.ts`
- `/social` - `lib/social-data.ts`

### Deployment

You can deploy the project with [Vercel](https://vercel.com/) or any other hosting provider. If you want to use Vercel, you can use the button at the top of this README.

1. Update `package.json` author information
2. Set up the `NEXT_PUBLIC_BASE_URL` environment variable on Vercel to point to your website's root URL
3. Build and deploy

## Customization

### Fonts

This project uses [Inter](https://rsms.me/inter/) as the default font. You can change it on `app/layout.tsx` using the `next/fonts` package.

### Colors

The project uses Tailwind colors and @shadcn/ui config. Customize the colors on `globals.css`.

### Metadata

You can change the metadata in `utils/metadata.ts`. This will be used around the site for titles, social links, social handles, SEO, etc.

You can edit navigation links in `lib/navigation-links.ts`.

### Analytics

#### Vercel

To configure, you need to enable it on [Vercel project dashboard](https://vercel.com/dashboard) by selecting your Project and then click the Analytics tab and click Enable from the dialog.

#### Umami

Umami is a simple, easy to use, web analytics solution with self-hosting option! You can read more about it on [Umami website](https://umami.is/). (Hint: On [Railway](https://railway.app), you can self-host it low cost or even free)

Configure:
Set `NEXT_PUBLIC_UMAMI_SCRIPT_URL` & `NEXT_PUBLIC_UMAMI_WEBSITE_ID` environment variables on your `.env.local` file and on Vercel dashboard.

#### Others

Supporting other analytics providers are planned. Feel free to open an issue if you have any suggestions or a PR if you want to implement it yourself.

### Newsletter subscription

_WIP_ as I'm still deciding which email tools to support. Feel free to open an issue if you have any suggestions or a PR if you want to implement it yourself.

### Hero section

You can choose between 3 different hero variants to use in `app/(site)/page.tsx` by changing the imported hero component.

1. `HeroSimple` - A simple centered hero section with image, title, socials, and subtitle.
2. `HeroVideo` - 2 column hero section with Videoask embed on one side and title and subtitle on the other.
3. `HeroImage` - 2 column hero section with image on one side and title, socials, and subtitle on the other.

### Other tips & tricks

#### Image optimization

Optimize images in seconds for free with ImageOptim. Install on your Mac, then open the `public` folder in Finder. Select all images, right-click, and choose "Open with > ImageOptim". This will optimize all images in the folder.

Note: DO NOT overdo it. You can easily make images look bad with lossy compression algorithms.

## Examples

- [https://davidlevai.com/](https://davidlevai.com/)

Create a PR and add your blog to this list if you're using the template!

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
- [x] Analytics: Vercel, Umami
- [ ] Other analytics providers (fathom, simplelytics, plausible, etc)
- [ ] Design improvements (whitespace, layout, etc.)
- [ ] 404, error, and loading pages
- [ ] Code preview component
- [ ] Code highlight improvements (copy code, theme)
- [ ] `manifest.json`
- [ ] newsletter integration (form, api route, keys, welcome page, previous issues)
- [ ] Post series
- [ ] Hidden content (behind email subscription)
- [ ] 100 lighthouse score
- [ ] Command bar fuzzy search in content
- [ ] Pagination
- [ ] SEO improvements
- [ ] Accessibility audit
- [ ] TypeScript fixes
- [ ] Redesign uses page
- [ ] Redesign projects page
- [ ] general refactor
- [ ] general cleanup
- [ ] implement content security policies
- [ ] implement a videoask-like solution for the hero section
- [ ] multi-author support (?)
- [ ] Post like counter (?)
- [ ] Visitor counter (?)
- [ ] code playground instead of code highlighting (?)
- [ ] Categories and/or tags (?)
- [ ] Commenting system (?)
- [ ] Social sharing buttons (?)
- [ ] keyboard-based navigation with hotkeys (?)
- [ ] multiple layouts (sidebar, full-width, etc.) (?)
- [ ] multilang support (?)
- [ ] contributing docs

## Inspiration & Mentions

- [Delba Oliveira Personal Blog](https://github.com/delbaoliveira/website) - Using and structuring table of contents with Contentlayer
- [timlrx/tailwind-nextjs-starter-blog](https://github.com/timlrx/tailwind-nextjs-starter-blog) - Idea

## Support

If you love this template and/or use it, please give it a star on GitHub.
