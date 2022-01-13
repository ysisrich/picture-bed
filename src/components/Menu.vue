<template>
  <n-menu v-model:value="activeKey" mode="horizontal" :options="menuOptions" @update:value="handleUpdateExpandedKeys" />
</template>

<script>
  import { useSetting } from '@/store/index'
  import { defineComponent, h, ref } from 'vue'
  import { NIcon } from 'naive-ui'
  import {
    CloudUploadOutline as CloudUploadOutlineIcon,
    LogInOutline as LogInOutlineIcon,
    AlertCircleOutline as AlertCircleOutlineIcon,
    LanguageOutline as LanguageOutlineIcon,
    FlashlightOutline as FlashlightOutlineIcon
  } from '@vicons/ionicons5'

  function renderIcon(icon) {
    return () => h(NIcon, null, { default: () => h(icon) })
  }

  const menuOptions = [
    {
      label: '多图上传',
      key: 'upload',
      icon: renderIcon(CloudUploadOutlineIcon)
    },
    {
      label: '登录',
      key: 'login',
      icon: renderIcon(LogInOutlineIcon),
    },
    {
      label: '语言',
      key: 'language',
      icon: renderIcon(LanguageOutlineIcon),
      children: [
        {
          label: '中文',
          key: 'chinese',
          // icon: renderIcon(LanguageOutlineIcon),
        },
        {
          label: 'English',
          key: 'english',
          // icon: renderIcon(LanguageOutlineIcon),
        }
      ]
    },
    {
      label: '主题',
      key: 'theme',
      icon: renderIcon(FlashlightOutlineIcon),
      children: [
        {
          label: 'dark（深色）',
          key: 'dark',
          // icon: renderIcon(LanguageOutlineIcon),
        },
        {
          label: 'light（浅色）',
          key: 'light',
          // icon: renderIcon(LanguageOutlineIcon),
        }
      ]
    },
    {
      label: '关于',
      key: 'about',
      icon: renderIcon(AlertCircleOutlineIcon),
    },
  ]

  export default {
    name: 'Menu',
    components: {

    },
    setup() {
      let activeKey = ref(null)
      const handleUpdateExpandedKeys = value => {
        // console.log(value)
        // 登录
        if (value == 'login') {
          window.$message.info('还在开发ing.....别急')
        }
        // 上传
        else if (value == 'upload') {
          window.$message.info('还在开发ing.....别急')
        }
        // 切换语言
        else if (value == 'english' || value == 'chinese') {
          useSetting().changeConfig({ key: 'language', value })
        }
        // 切换主题
        else if (value == 'dark' || value == 'light') {
          useSetting().changeConfig({ key: 'theme', value })
        }
        // 切换主题
        else if (value == 'about') {
          window.$message.info('还在开发ing.....别急')
        }
      }

      return {
        activeKey,
        menuOptions,
        handleUpdateExpandedKeys
      }
    }
  }
</script>