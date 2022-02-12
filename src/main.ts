import { createApp } from "vue";
import App from "./App.vue";

import router from "./router/index";
import { createPinia } from "pinia";
import i18n from '@/lang/index'

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
  NRadioButton,
  NModal,
  NTabs,
  NTabPane,
  NFormItemRow,
  NForm,
  NRadio,
  NSelect,
  NStatistic,
  NCascader
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
  NRadio,
  NModal,
  NTabs,
  NTabPane,
  NFormItemRow,
  NForm,
  NSelect,
  NStatistic,
  NCascader
];

const naive = create({ components });

const app = createApp(App);

app.use(createPinia()).use(i18n).use(router).use(naive).mount("#app");

