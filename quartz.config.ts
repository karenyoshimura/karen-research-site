import { QuartzConfig } from "@quartz/schema"

const config: QuartzConfig = {
  projectRoot: ".",
  ignorePatterns: ["node_modules", ".git", ".github"],

  siteMetadata: {
    title: "Karen Yoshimura",
    description: "Researcher | Writer | Diaspora Studies",
    author: "Karen Yoshimura",
    email: "karenyoshimura1@gmail.com",
    domain: "https://karenyoshimura.github.io/karen-research-site",
  },

  theme: {
    typography: {
      header: "serif",
      body: "serif",
    },
    colors: {
      light: {
        primary: "#5C2D91"
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

export default config
