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

  head:[
    ["script", { src: "https://cdnjs.cloudflare.com/ajax/libs/pangu/4.0.7/pangu.js" }],
    [
      "script",
      {},
      `\
      document.addEventListener('DOMContentLoaded', () => {
        pangu.spacingElementByTagName('p');
        pangu.spacingElementByTagName('h2');
        pangu.spacingElementByTagName('h3');
        pangu.spacingElementByTagName('h4');
    })
    document.addEventListener('DOMContentLoaded', () => {
      // listen to any DOM change and automatically perform spacing via MutationObserver()
      pangu.autoSpacingPage();
    });
      `,
    ],
        ["link", { rel: "preconnect", href: "https://fonts.googleapis.com" }],
    [
      "link",
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
    ],
    [
      "link",
      {
        href: "https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;500;700&display=swap",
        rel: "stylesheet",
      },
    ],
  ]
  
  // Enable it with pwa
  // shouldPrefetch: false,
});


