import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default({
  base: "/",

  lang: "zh-CN",
  title: "文档演示",
  description: "vuepress-theme-hope 的文档演示",
  theme,
  
  // Enable it with pwa
  // shouldPrefetch: false,
});


