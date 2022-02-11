<template>
  <n-menu v-model:value="activeKey" mode="horizontal" :options="menuOptions" @update:value="handleUpdateExpandedKeys" />
</template>

<script>
  import { useSetting, useUser } from '@/store/index'
  import { useI18n } from 'vue-i18n'

  import { defineComponent, h, ref, reactive, toRefs, watch, computed } from 'vue'
  import { useRouter } from 'vue-router'
  import { NIcon } from 'naive-ui'
  import {
    CloudUploadOutline as CloudUploadOutlineIcon,
    LogInOutline as LogInOutlineIcon,
    AlertCircleOutline as AlertCircleOutlineIcon,
    LanguageOutline as LanguageOutlineIcon,
    ContrastSharp as ContrastSharpIcon,
    PersonOutline as PersonOutlineIcon
  } from '@vicons/ionicons5'


  export default {
    name: 'Menu',
    setup() {
      const { t, locale } = useI18n()
      const router = useRouter()

      const data = reactive({
        activeKey: '',
        menuOptions: [],
        showModal: false
      })
      const renderIcon = (icon) => () => h(NIcon, null, { default: () => h(icon) })
      const MESSAGE = {}
      const local = computed(() => locale.value)
      const userType = computed(() => useUser().userType)


      watch([local, userType], () => {

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
            icon: renderIcon(ContrastSharpIcon),
            children: [
              { label: 'dark（深色）', key: 'dark', },
              { label: 'light（浅色）', key: 'light', }
            ]
          },
          {
            label: t('menu.about'),
            key: 'about',
            icon: renderIcon(AlertCircleOutlineIcon),
            children: [
              // { label: '本站介绍', key: 'site_introduced', },
              // { label: '纪念相册', key: 'memorial_album', },
              // { label: '更多推荐', key: 'more_recommended', }
            ]
          },
        ]

        // token 存在即登录
        if (userType.value === 1) {
          const timer = setInterval(() => {
            if (useUser().git.userInfo.avatar_url) {
              const login_finish = {
                label: useUser().git.userInfo.name || useUser().git.userInfo.login,
                key: 'login',
                icon: renderIcon(PersonOutlineIcon),
                children: [
                  { label: t('menu.userInfo'), key: 'userInfo', },
                  { label: t('menu.exit'), key: 'exit', }
                ]
              }
              const index = data.menuOptions.findIndex(item => item.key == 'login')
              data.menuOptions.splice(index, 1, login_finish)
              clearInterval(timer)
            }
          }, 200)
        }


      }, { immediate: true })

      // 登录就显示账号
      const showAccountName = () => {
        if (useUser().userType == 1) {
          const login_finish = {
            label: useUser().git.userInfo.name,
            key: 'login',
            icon: renderIcon(PersonOutlineIcon),
            children: [
              { label: t('menu.userInfo'), key: 'userInfo', },
              { label: t('menu.exit'), key: 'exit', }
            ]
          }
          const index = data.menuOptions.findIndex(item => item.key == 'login')
          data.menuOptions.splice(index, 1, login_finish)
        }
      }


      const handleUpdateExpandedKeys = value => {
        console.log(value)
        // 登录
        if (value === 'login') {
          router.push('/login')
        }
        // 退出
        if (value === 'exit') {
          useUser().exit()
        }
        // 个人资料
        if (value === 'userInfo') {
          router.push('/user')
        }
        // 上传
        else if (value === 'upload') {
          router.push('/')
        }
        // 切换语言
        else if (value === 'en' || value === 'zh') {
          locale.value = value
          useSetting().changeConfig({ key: 'language', value })
        }
        // 切换主题
        else if (value === 'dark' || value === 'light') {
          useSetting().changeConfig({ key: 'theme', value })
        }
        // 关于
        else if (value == 'site_introduced' || value == 'memorial_album' || value == 'more_recommended') {
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