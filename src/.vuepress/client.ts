import { defineClientConfig } from "vuepress/client";
import { setupRunningTimeFooter } from "vuepress-theme-hope/presets/footerRunningTime.js";

import "vuepress-theme-hope/presets/shinning-feature-panel.scss";
import "vuepress-theme-hope/presets/left-blog-info.scss";
import "vuepress-theme-hope/presets/round-blogger-avatar.scss";
import "vuepress-theme-hope/presets/bounce-icon.scss";
// import "vuepress-theme-hope/presets/hide-navbar-icon.scss";
// import "vuepress-theme-hope/presets/hide-sidebar-icon.scss";
// 不生效
// import "vuepress-theme-hope/presets/hr-driving-car.scss";

export default defineClientConfig({
  setup() {
    setupRunningTimeFooter(
      new Date("2024-05-12"),
      {
        // "/": ": :day days :hour hours :minute minutes :second seconds",
        "/": "网站已运行 :day 天 :hour 小时 :minute 分钟 :second 秒",
      },
      true,
    );
    // setupTransparentNavbar({ type: "homepage" });
  },
});
