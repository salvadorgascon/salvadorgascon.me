export const SITE = {
  website: "https://salvadorgascon.me/", // replace this with your deployed domain
  author: "Salvador Gascon",
  profile: "https://salvadorgascon.me/",
  desc: "My personal blog.",
  title: "Salvador Gascon Blog",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: false,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: false,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: false,
    text: "Edit page",
    url: "https://github.com/satnaing/astro-paper/edit/main/",
  },
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  lang: "en", // html lang code. Set this empty and default will be "en"
  timezone: "Europe/Madrid", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
