import { SiteMetaData } from "@/types";

export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

export const defaultAuthor = {
  name: "Amy Shields",
  handle: "@amyshieldsfake",
  social: {
    github: "https://github.com/thedevdavid",
    instagram: "https://instagram.com/thedevdavid",
    linkedin: "https://linkedin.com/in/thedevdavid",
    tiktok: "https://tiktok.com/@thedevdavid",
    twitter: "https://twitter.com/thedevdavid",
    youtube: "https://youtube.com/@thedevdavid",
  },
  email: "definitelyfake@nevermind.com",
  website: "https://nextjs.org",
  jobTitle: "Frontend Engineer & UI Designer",
  company: "Unicorns & Co.",
  availableForWork: true,
};

const defaultTitle = `${defaultAuthor.name}'s Blog`;
const defaultDescription = `I'm ${defaultAuthor.name}. Building hackin’ cool digital products around the world 🌴.`;

const siteMetadata: SiteMetaData = {
  title: {
    template: `%s | ${defaultTitle}`,
    default: defaultTitle,
  },
  description: defaultDescription,
  siteRepo: "https://github.com/thedevdavid/digital-garden",
  metadataBase: new URL(BASE_URL),
  newsletterUrl: "https://developreneur.davidlevai.com",
  analyticsProvider: "umami",
};

export default siteMetadata;
