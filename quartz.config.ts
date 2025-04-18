import { QuartzConfig } from "./quartz/plugins/types"

const config: QuartzConfig = {
  projectRoot: ".",

  siteMetadata: {
    title: "Karen Yoshimura",
    description: "Researcher | Writer | Diaspora & Memory Studies",
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
