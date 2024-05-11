import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { shikiPlugin } from "@vuepress/plugin-shiki";
import { commentPlugin } from '@vuepress/plugin-comment'

export default defineUserConfig({
  base: "/",
  lang: "zh-CN",
  title: "编程体系梳理",
  description: "有输入才能有输出；输出激励输入；输出是手段；体系是目的",

  head: [

  ],

  theme,

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
