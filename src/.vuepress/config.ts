import { defineUserConfig } from "vuepress";
import { getDirname, path } from "vuepress/utils";
import theme from "./theme.js";
import { shikiPlugin } from "@vuepress/plugin-shiki";
import { commentPlugin } from '@vuepress/plugin-comment'

const __dirname = getDirname(import.meta.url);

export default defineUserConfig({
  base: "/",
  lang: "zh-CN",
  title: "编程体系",
  description: "打造自己的编程知识体系",

  head: [

  ],

  theme,

  alias: {
    "@theme-hope/modules/blog/components/BlogHero": path.resolve(
      __dirname,
      "./components/BlogHero.vue",
    ),
  },

  plugins: [
    shikiPlugin({
      // 你的选项
      themes: {
        light: "github-light",
        dark: "one-dark-pro",
      },
    }),
    // 评论
    commentPlugin({
      // comment: false,
      provider: "Giscus",
      repo :"yangwenjinIter/yangwenjin-docs-comment-giscus",
      repoId:"R_kgDOL6Klig",
      category:"General",
      categoryId:"DIC_kwDOL6Klis4CfSf7",
      mapping: "pathname",
      lazyLoading: true,
    }),
  ],

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
