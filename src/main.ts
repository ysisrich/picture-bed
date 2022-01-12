import { createApp } from "vue";
import App from "./App.vue";

import router from "./router/index";
import { createPinia } from "pinia";

// 通用字体
import "vfonts/Lato.css";
// 等宽字体
import "vfonts/FiraCode.css";
import {
  // create naive ui
  create,
  // component
  NButton,
  NUpload,
  NIcon,
  NUploadDragger,
  NP,
  NText,
  NAlert,
  NConfigProvider,
  NMessageProvider,
  NDialogProvider,
  NLoadingBarProvider,
  NNotificationProvider,
  NSpace,
  NLayout,
  NLayoutHeader,
  NLayoutContent,
  NLayoutFooter,
  NMenu,
  NCard,
  NSpin,
  NImage,
  NInput,
} from "naive-ui";

const components = [
  NButton,
  NUpload,
  NIcon,
  NUploadDragger,
  NP,
  NText,
  NAlert,
  NConfigProvider,
  NMessageProvider,
  NDialogProvider,
  NLoadingBarProvider,
  NNotificationProvider,
  NSpace,
  NLayout,
  NLayoutHeader,
  NLayoutContent,
  NLayoutFooter,
  NMenu,
  NCard,
  NSpin,
  NImage,
  NInput,
];

const naive = create({ components });

const app = createApp(App);

app.use(router);
// 创建根存储库并将其传递给应用程序
app.use(createPinia());
app.use(naive);

app.mount("#app");
