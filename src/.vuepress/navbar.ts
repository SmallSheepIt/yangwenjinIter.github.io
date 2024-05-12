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
        icon: "basis",
        link: "/java/base/"
      },
      {
        text: "Java进阶",
        icon: "advanced",
        link: "/java/advanced/"
      },
      {
        text: "Spring系列",
        icon: "spring",
        link: "/java/spring/"
      },
      {
        text: "Java学习路线",
        icon: "learning-route",
        link: "/java/java-learning-route"
      },
      {
        text: "JVM",
        icon: "jvm",
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
        icon: "learning-route",
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
        icon: "mysql",
        link: "mysql/"
      },
      {
        text: "Redis",
        icon: "redis",
        link: "redis/"
      },
    ]
  }
]);
