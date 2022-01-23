<template>

  <!-- 内容 -->
  <n-config-provider :theme="theme === 'dark'?darkTheme:null" :locale="language ==='zh'?zhCN:null"
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
  import { useI18n } from 'vue-i18n'

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
      const userType = computed(() => useUser().userType)

      const { t, locale } = useI18n()
      const local = computed(() => locale.value)

      onMounted(() => {
        if (userType || !userType.value) {
          setTimeout(() => {
            window.$notification.success({
              title: t('message.title1'),
              content: t('message.content', { time: experienceNumber.value }),
              duration: 10000
            })
          })
        }
      })

      // 禁止右键
      document.oncontextmenu = function () {
        window.$message.warning(t('message.forbidRightKey'))
        return false
      }
      // 禁止f12
      // document.onkeydown = function (e) {
      //   if (e.keyCode == 123) {
      //     window.$message.warning(t('message.forbidF12'))
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