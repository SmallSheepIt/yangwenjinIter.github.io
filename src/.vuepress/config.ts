import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { shikiPlugin } from "@vuepress/plugin-shiki";

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
  ],

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
