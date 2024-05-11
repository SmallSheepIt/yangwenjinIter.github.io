import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "Java",
    // prefix: "/java/",
    icon: "java",
    children: [
      {
        text: "Java基础",
        link: "/java/base/"
      },
      {
        text: "Java进阶",
        link: "/java/advanced/"
      },
      {
        text: "Spring系列",
        link: "/java/spring/"
      },
      {
        text: "Java学习路线",
        link: "/java/java-learning-route"
      },
      {
        text: "jvm",
        link: "/java-jvm/"
      },
    ]
  },
  {
    text: "Python",
    icon: "python",
    prefix: "/python/",
    children: [
      {
        text: "Python学习路线",
        link: "python-learning-route",
      }
      
    ]
  },
  {
    text: "数据库",
    icon: "database",
    prefix: "/database/",
    children: [
      {
        text: "Mysql",
        icon: "",
        link: "mysql/"
      },
      {
        text: "Redis",
        icon: "",
        link: "redis/"
      },
    ]
  }
]);
