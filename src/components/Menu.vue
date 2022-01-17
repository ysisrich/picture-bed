<template>
  <n-menu v-model:value="activeKey" mode="horizontal" :options="menuOptions" @update:value="handleUpdateExpandedKeys" />
</template>

<script>
  import { useSetting } from '@/store/index'
  import { useI18n } from 'vue-i18n'

  import { defineComponent, h, ref, reactive, toRefs, watch, computed } from 'vue'
  import {  useRouter } from 'vue-router'
  import { NIcon } from 'naive-ui'
  import {
    CloudUploadOutline as CloudUploadOutlineIcon,
    LogInOutline as LogInOutlineIcon,
    AlertCircleOutline as AlertCircleOutlineIcon,
    LanguageOutline as LanguageOutlineIcon,
    FlashlightOutline as FlashlightOutlineIcon
  } from '@vicons/ionicons5'


  export default {
    name: 'Menu',
    setup() {
      const { t, locale } = useI18n()
      const router = useRouter()

      let data = reactive({
        activeKey: '',
        menuOptions: [],
        showModal:false
      })

      const renderIcon = (icon) => () => h(NIcon, null, { default: () => h(icon) })
      const MESSAGE = {}


      const local = computed(() => locale.value)
      watch(local, () => {
        MESSAGE.underDevelopment = t('message.underDevelopment')
        data.menuOptions = [
          {
            label: t('menu.upload'),
            key: 'upload',
            icon: renderIcon(CloudUploadOutlineIcon)
          },
          {
            label: t('menu.login'),
            key: 'login',
            icon: renderIcon(LogInOutlineIcon),
          },
          {
            label: t('menu.language'),
            key: 'language',
            icon: renderIcon(LanguageOutlineIcon),
            children: [
              { label: '中文', key: 'zh', },
              { label: 'English', key: 'en', }
            ]
          },
          {
            label: t('menu.theme'),
            key: 'theme',
            icon: renderIcon(FlashlightOutlineIcon),
            children: [
              { label: 'dark（深色）', key: 'dark', },
              { label: 'light（浅色）', key: 'light', }
            ]
          },
          {
            label: t('menu.about'),
            key: 'about',
            icon: renderIcon(AlertCircleOutlineIcon),
          },
        ]
      }, { immediate: true })


      const handleUpdateExpandedKeys = value => {
        // console.log(value)
        // 登录
        if (value == 'login') {
          router.push({name:'Login'})
        }
        // 上传
        else if (value == 'upload') {
          window.$message.info(MESSAGE.underDevelopment)
        }
        // 切换语言
        else if (value == 'en' || value == 'zh') {
          locale.value = value
          useSetting().changeConfig({ key: 'language', value })
        }
        // 切换主题
        else if (value == 'dark' || value == 'light') {
          useSetting().changeConfig({ key: 'theme', value })
        }
        // 关于
        else if (value == 'about') {
          window.$message.info(MESSAGE.underDevelopment)
        }
      }

      return {
        ...toRefs(data),
        handleUpdateExpandedKeys
      }
    }
  }
</script>