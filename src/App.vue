
<template>

  <!-- 消息提示 message -->
  <n-message-provider>
    <MessageApi />
  </n-message-provider>

  <!-- 弹出框 dialog -->
  <n-dialog-provider>
    <DialogApi />
  </n-dialog-provider>

  <!-- 内容 -->
  <n-config-provider :theme="theme === 'dark'?darkTheme:null" :locale="language ==='chinese'?zhCN:null" :theme-overrides="themeOverrides">
    <n-layout >
      <div vertical class="layout">
        <n-layout-header>
          <Header />
        </n-layout-header>
        <n-layout-content content-style="padding: 24px;">
          <router-view />
        </n-layout-content>
        <n-layout-footer position="absolute">
          <Footer />
        </n-layout-footer>
      </div>
    </n-layout>
  </n-config-provider>

</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import MessageApi from "@/components/naive-ui/MessageApi.vue";
import DialogApi from "@/components/naive-ui/DialogApi.vue";

import Cookie from '@/hooks/Cookie'  
import { onMounted, ref, watch, computed } from 'vue'
import {useStore} from '@/store/index'

// theme locale 
import { darkTheme, zhCN, enUS } from 'naive-ui'

 /**
   * js 文件下使用这个做类型提示
   * @type import('naive-ui').GlobalThemeOverrides
   */
const themeOverrides = {
	// common: {
	//   primaryColor: '#FF0000'
	// },
	// Button: {
	//   textColor: '#FF0000'
	// }
}
export default {
  name:'app',
  components: {
    Header,
    Footer,
    MessageApi,
    DialogApi,
  },
  setup() {
	const store = useStore()
	  
    const theme = computed(() => store.websiteConfig.theme)
    const language = computed(() => store.websiteConfig.language)
    
    return {
      darkTheme,
	  zhCN,
	  enUS,
      language,
	  themeOverrides,
	  theme
    }
  }
}
</script>

<style  lang="scss">
body {
  padding: 0;
  margin: 0;
}

.layout{
  /* width: 1200px; */
  margin: auto;
  height: 100vh;
}
</style>
