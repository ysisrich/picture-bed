<template>
  <div class="content">
    <n-space vertical>
      <Alert currentPage="login" />
      <n-spin :show="show">
        <LoginForm />
        <template #description>{{$t('login.wait')}}</template>
      </n-spin>
    </n-space>
  </div>
</template>

<script setup>
  // 自定义组件
  import LoginForm from "@/components/login/Index.vue";
  import Alert from '@/components/Alert.vue'

  import { useUser } from '@/store/index'
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  import Cookie from "@/utils/Cookie";
  import i18n from '@/lang/index'
  import { Base64 } from 'js-base64';
  import _axios from 'axios'


  const router = useRouter()
  let show = ref(false)



  if (location.search && location.search.includes('code')) {
    show.value = true
    setTimeout(() => {
      window.$notification.error({
        title: t('message.loadTimeout'),
        duration: 10000
      })
      show.value = false
    }, 10000)
    window.$loadingBar.start();
    const code = location.search.substr(1).split('&')[0].split('=')[1]
    let state = ''
    if (location.search.substr(1).split('&').length > 1) {
      state = location.search.substr(1).split('&')[1].split('=')[1]
    }
    const client_id = useUser().git.OAuth.client_id
    const client_secret = useUser().git.OAuth.client_secret
    const redirect_uri = import.meta.env.VITE_APP_WEB_URL + '/login'

    let path = ''
    if (useUser().repoType == 'Github') {
      // path = `https://github.com/login/oauth/access_token`
      // path = `https://github.com/login/oauth/access_token?client_id=${client_id}&client_secret=${client_secret}&code=${code}&redirect_uri=${redirect_uri}&state=${state}`
      path = 'https://nav.yangsong.cool/ibed/oauth'
      console.log(path)
      // _axios.post(path, {
      //     // client_id, client_secret, redirect_uri, code
      // }, {
      //     headers: {
      //         'accept': '*/*',
      //         'content-type': 'application/json',
      //         'access-control-request-headers': 'authorization'
      //     },
      //     request: {

      //     },
      //     withCredentials: false,
      // }).then(res => {
      //     if (res.status == 200) {
      //         Cookie.setCookie('token', Base64.encode(res.data.access_token) + '=', res.data.expires_in / 3600 / 24 || 1)
      //         useUser().userType = 1
      //         window.$message.success(i18n.global.t('login.loginSuccess'))
      //         useUser().getLocalstorageToken()
      //     }
      // })


      _axios.post(path, {
        client_id, client_secret, redirect_uri, code, state,
      }).then(res => {
        if (res.status == 200) {
          console.log('res', res.data)
          if (res.error) {
            window.$message.error(res.error_description)
          } else {
            window.$loadingBar.finish();
            Cookie.setCookie('token', Base64.encode(res.data.access_token) + '=', res.data.expires_in / 3600 / 24 || 1)
            useUser().userType = 1
            window.$message.success(i18n.global.t('login.loginSuccess'))
            useUser().getLocalstorageToken()
            show.value = false
            setTimeout(() => {
              router.replace('/')
            }, 1500)
          }
        }
      }).catch(
        err => {
          console.log(err)
          window.$loadingBar.error();
        }
      )

    } else {
      path = `https://gitee.com/oauth/token?grant_type=authorization_code&code=${code}&client_id=${client_id}&redirect_uri=${redirect_uri}&client_secret=${client_secret}`
      console.log(path)
      _axios.post(path).then(res => {
        if (res.status == 200) {
          window.$loadingBar.finish();
          Cookie.setCookie('token', Base64.encode(res.data.access_token) + '=', res.data.expires_in / 3600 / 24 || 1)
          useUser().userType = 1
          window.$message.success(i18n.global.t('login.loginSuccess'))
          useUser().getLocalstorageToken()
          show.value = false
          setTimeout(() => router.replace('/'), 1500)
        }
      })

    }



  }


</script>

<style lang="scss" scoped>
  .content {
    width: $main-width;
    height: calc(100vh - 168px);
    margin: auto;
    text-align: center;
    box-sizing: border-box;
    /* @include flx(center,center); */
  }
</style>