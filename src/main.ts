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
  NRadioGroup,
  NRadioButton
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
  NRadioGroup,
  NRadioButton,
];

const naive = create({ components });

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(naive);

app.mount("#app");
