import { QuartzConfig } from "./types"

export const config: QuartzConfig = {
  projectRoot: ".",
  ignorePatterns: ["node_modules", ".git", ".github"],

  siteMetadata: {
    title: "Karen Yoshimura",
    description: "Researcher | Writer | Diaspora & Memory Studies",
    author: "Karen Yoshimura",
    email: "karenyoshimura1@gmail.com",
    domain: "https://yourusername.github.io/karen-research-site", // Replace with your actual link
  },

  theme: {
    typography: {
      header: "serif",
      body: "serif",
    },
    colors: {
      light: {
        primary: "#5C2D91", // Change to your preferred shade
      },
    },
  },

  plugins: [
    "notes",
    "sitemap",
    "search",
    "rss",
    "lastModified",
    "tags",
    "tableOfContents",
    "linkPreviews",
  ],
}
