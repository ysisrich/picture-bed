
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
  <n-config-provider :theme="darkTheme" :locale="locale">
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
import { onMounted, ref } from 'vue'

import { 
  NConfigProvider, 
  NMessageProvider, 
  NDialogProvider,
  NSpace,
  NLayout,  
  NLayoutHeader,  
  NLayoutContent,  
  NLayoutFooter,  
} from 'naive-ui'
// theme
import {  darkTheme  } from 'naive-ui'
// locale 
import { zhCN, enUS } from 'naive-ui'


export default {
  name:'app',
  components: {
    Header,
    Footer,

    MessageApi,
    DialogApi,
    NMessageProvider,
    NDialogProvider,
    NConfigProvider,
    NSpace,
    NLayout,
    NLayoutHeader,  
    NLayoutContent,  
    NLayoutFooter,  
  },
  setup() {
    const theme = Cookie.getCookie('theme')
    const language = Cookie.getCookie('language')
    onMounted(()=>{
    })
    return {
      darkTheme:theme=='dark'?darkTheme:null,
      locale:language=='chinese'?zhCN:enUS,
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
