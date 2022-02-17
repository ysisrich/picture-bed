<template>
  <n-card title="" class="login">
    <n-tabs default-value="signin1" size="large" justify-content="space-evenly">
      <n-tab-pane name="signin1" tab="OAuth Token">
        <n-form class="marginTop-50">
          <n-form-item-row :label="$t('repositories')">
            <n-space>
              <n-radio :checked="checkedValue === 'Github'" @change="handleChange" value="Github">
                Github
              </n-radio>
              <n-radio :checked="checkedValue === 'Gitee'" @change="handleChange" value="Gitee">
                Gitee
              </n-radio>
            </n-space>
          </n-form-item-row>
          <n-form-item-row label="OAuth Token">
            <n-input type="password" v-model:value="token" show-password-on="mousedown"
              :placeholder="$t('login.password')" />
          </n-form-item-row>
          <n-form-item-row :label="$t('login.expirationTime')">
            <n-select v-model:value="expirationTime" :options="options" />
          </n-form-item-row>
          <n-button type="primary" block @click="handleLogin('token')">{{$t('login.sign_in')}}</n-button>
        </n-form>
      </n-tab-pane>
      <n-tab-pane name="signin2" tab="OAuth Apps" class="oauth">
        <div class="oauth_icon">
          <n-space>
            <n-icon size="80" :depth="3">
              <LogoGithubIcon @click="ToOAuth('Github')" />
            </n-icon>
            <img @click="ToOAuth('Gitee')" class="gitee" src="@/assets/img/gitee.png" alt="">
          </n-space>
        </div>
      </n-tab-pane>
      <!--  <n-tab-pane name="signin3" :tab="$t('login.username') +'/'+ $t('login.password')">
        <n-form class="marginTop-50">
          <n-form-item-row :label="$t('repositories')">
            <n-space>
              <n-radio :checked="checkedValue === 'Github'" @change="handleChange" value="Github">
                Github
              </n-radio>
              <n-radio :checked="checkedValue === 'Gitee'" @change="handleChange" value="Gitee">
                Gitee
              </n-radio>
            </n-space>
          </n-form-item-row>
          <n-form-item-row :label="$t('login.username')">
            <n-input />
          </n-form-item-row>
          <n-form-item-row :label="$t('login.password')">
            <n-input />
          </n-form-item-row>
          <n-form-item-row :label="$t('login.expirationTime')">
            <n-select v-model:value="expirationTime" :options="options" />
          </n-form-item-row>
        </n-form>
        <n-button type="primary" block @click="handleLogin()">{{$t('login.sign_in')}}</n-button>
      </n-tab-pane> -->
    </n-tabs>
  </n-card>
</template>

<script>
  import { defineComponent, ref, reactive, toRefs, watch, computed } from "vue";
  import { useUser } from '@/store/index'
  import { useI18n } from 'vue-i18n'
  import { useRouter } from 'vue-router'
  import {
    LogoGithub as LogoGithubIcon,
  } from '@vicons/ionicons5'


  export default defineComponent({

    components: {
      LogoGithubIcon
    },
    setup() {

      const { t, locale } = useI18n()
      const router = useRouter()

      let data = reactive({
        checkedValue: 'Github',
        token: '',
        expirationTime: 0,
        options: []
      })

      const local = computed(() => locale.value)
      watch(locale, () => {
        data.options = [
          {
            label: t('expirationTime.expirationTime1'),
            value: 0,
          },
          {
            label: t('expirationTime.expirationTime2'),
            value: 0.125
          },
          {
            label: t('expirationTime.expirationTime3'),
            value: 0.25
          },
          {
            label: t('expirationTime.expirationTime4'),
            value: 1
          },
          {
            label: t('expirationTime.expirationTime5'),
            value: 30
          },
          {
            label: t('expirationTime.expirationTime6'),
            value: 365
          }
        ]
      }, { immediate: true })

      const handleChange = (e) => {
        data.checkedValue = e.target.value
      }

      const handleLogin = (loginType) => {
        let params = {
          loginType,
          repoType: data.checkedValue,
          expirationTime: data.expirationTime,
          token: data.token
        }
        useUser().login(params).then(res => {
          if (res) {
            router.push('/')
          }
        })
      }

      const ToOAuth = (repoType) => {
        useUser().changeRepoType(repoType)
        const client_id = useUser().git.OAuth.client_id
        const client_secret = useUser().git.OAuth.client_secret
        const redirect_uri = import.meta.env.VITE_APP_WEB_URL

        let path = ''
        if (repoType == 'Github') {
          path = `https://github.com/login/oauth/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=user&state=1s12111s12121`
        } else {
          path = `https://gitee.com/oauth/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=code`
        }

        console.log(path)
        location.href = path
      }

      return {
        ...toRefs(data),
        handleChange,
        handleLogin,
        ToOAuth
      };
    },
  });
</script>

<style lang="scss" scoped>
  .login {
    width: 60%;
    margin: 10px auto;

    ::v-deep(.n-input__input) {
      text-align: left;
    }

    ::v-deep(.n-form-item-blank) {
      text-align: left;
    }

    .oauth_icon {
      display: flex;
      justify-content: space-around;
      padding: 100px;
      cursor: pointer;
    }

    .gitee {
      width: 80px;
      height: 80px;
    }
  }
</style>