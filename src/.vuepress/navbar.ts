import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "目录",
    icon: "list",
    prefix: "/note/",
    children: [
      {
        text: "路由交换",
        icon: "lightbulb",
        link: "Routing-and-switching"
      },
      //{
      //  text: "Foo",
      //  icon: "lightbulb",
      //  prefix: "foo/",
      //  children: ["ray", { text: "...", icon: "ellipsis", link: "" }],
      //},
    ],
  },
  // {
  //   text: "V2 文档",
  //   icon: "book",
  //   link: "https://theme-hope.vuejs.press/zh/",
  // },
]);
