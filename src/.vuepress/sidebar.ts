import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  // "/java/": "structure",
  "/java/": [
    {
      text: "Java基础",
      prefix: "base/",
      icon: "java",
      collapsible: true,
      children: [
      ]
    },
    {
      text: "Java进阶",
      prefix: "advanced/",
      icon: "java",
      collapsible: true,
      children: [
      ]
    },
    {
      text: "Spring系列",
      prefix: "spring/",
      icon: "spring_",
      collapsible: true,
      children: [
      ]
    },
    "java-learning-route"
  ],
  "/java-jvm/": [
    "memory-area",
  ],
  "/python/": [
    "python-learning-route",
  ],
  "/database/": [
    {
      text: "Mysql",
      prefix: "mysql/",
      icon: "mysql1",
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
