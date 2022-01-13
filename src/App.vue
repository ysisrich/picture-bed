<template>

  <!-- 内容 -->
  <n-config-provider :theme="theme === 'dark'?darkTheme:null" :locale="language ==='chinese'?zhCN:null"
    :theme-overrides="themeOverrides">
    <n-layout>
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

    <Feedback />
  </n-config-provider>

</template>

<script>
  import Header from "@/components/Header.vue";
  import Footer from "@/components/Footer.vue";
  import Feedback from "@/components/Feedback.vue";

  import { onMounted, ref, watch, computed } from 'vue'
  import { useSetting, useUser } from '@/store/index'

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
    name: 'app',
    components: {
      Header,
      Footer,
      Feedback
    },
    setup() {
      const theme = computed(() => useSetting().theme)
      const language = computed(() => useSetting().language)
      const experienceNumber = computed(() => useUser().experienceNumber)
	  
      onMounted(() => {
        setTimeout(() => {
          window.$notification.success({
            title: '欢迎来到Git图床',
            content: `你当前还有${experienceNumber.value}次体验上传图片！！！`,
            duration: 10000
          })
        })
      })


      // 禁止选中
      // document.body.onselectstart = function(){
      // 	window.$message.warning('禁止选中')
      // 　　return false;
      // }
      // 禁止右键
      document.oncontextmenu = function () {
        window.$message.warning('禁止右键')
        return false
      }
      // 禁止f12
      // document.onkeydown = function (e) {
      //   if (e.keyCode == 123) {
      //     window.$message.warning('禁止f12')
      //     return false
      //   }
      // }


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

<style lang="scss">
  body {
    padding: 0;
    margin: 0;
  }

  .layout {
    /* width: 1200px; */
    margin: auto;
    height: 100vh;
  }
</style>