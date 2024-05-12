import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  // "/java/": "structure",
  "/java/": [
    {
      text: "Java基础",
      prefix: "java/",
      icon: "basis",
      collapsible: true,
      children: [
      ]
    },
    {
      text: "Java进阶",
      prefix: "java/",
      icon: "advanced",
      collapsible: true,
      children: [
      ]
    },
    {
      text: "Spring系列",
      prefix: "spring/",
      icon: "spring",
      collapsible: true,
      children: [
      ]
    },
    {
      text: "Java学习路线",
      icon: "learning-route",
      link: "java-learning-route"
    },
  ],
  "/java-jvm/": [
    "memory-area",
  ],
  "/python/": [
    {
      text: "Python学习路线",
      icon: "learning-route",
      link: "python-learning-route"
    },
  ],
  "/database/": [
    {
      text: "Mysql",
      prefix: "mysql/",
      icon: "mysql",
      collapsible: true,
      children: [
        "data-type",
        "memory-engine"
      ]
    },
    {
      text: "Redis",
      prefix: "redis/",
      icon: "redis",
      collapsible: true,
      children: [
        "data-type"
      ]
    },
  ]
});
