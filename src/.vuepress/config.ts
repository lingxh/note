import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default({
  base: "/",

  lang: "zh-CN",
  title: "lingxh的笔记",
  description: "用于记录学习笔记",
  theme,

  markdown: {
    headers: {
      level: [2,3,4]
    }
  },
  
  // Enable it with pwa
  // shouldPrefetch: false,
});


