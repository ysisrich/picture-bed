<template>
    <div class="content">
        <n-space vertical>
            <Alert currentPage="index" />
            <Radio />
            <Upload />
            <Result />
        </n-space>
    </div>
</template>

<script setup>
    import Upload from '@/components/Upload.vue'
    import Radio from '@/components/Radio.vue'
    import Alert from '@/components/Alert.vue'
    import Result from '@/components/Result.vue'

    import { useUser } from '@/store/index'
    import Cookie from "@/utils/Cookie";
    import i18n from '@/lang/index'
    import { Base64 } from 'js-base64';
    import _axios from 'axios'



    if (location.search && location.search.includes('code')) {
        const code = location.search.substr(1).split('&')[0].split('=')[1]
        let state = ''
        if (location.search.substr(1).split('&').length > 1) {
            state = location.search.substr(1).split('&')[1].split('=')[1]
        }
        const client_id = useUser().git.OAuth.client_id
        const client_secret = useUser().git.OAuth.client_secret
        const redirect_uri = import.meta.env.VITE_APP_WEB_URL

        let path = ''
        if (useUser().repoType == 'Github') {
            // path = `https://github.com/login/oauth/access_token`
            path = `https://github.com/login/oauth/access_token?client_id=${client_id}&client_secret=${client_secret}&code=${code}&redirect_uri=${redirect_uri}&state=${state}`
            console.log(path)
            _axios.post(path, {
                // client_id, client_secret, redirect_uri, code
            }, {
                header: 'Accept: application/json'
            }).then(res => {
                if (res.status == 200) {
                    Cookie.setCookie('token', Base64.encode(res.data.access_token) + '=', res.data.expires_in / 3600 / 24 || 1)
                    useUser().userType = 1
                    window.$message.success(i18n.global.t('login.loginSuccess'))
                    useUser().getLocalstorageToken()
                }
            })

        } else {
            path = `https://gitee.com/oauth/token?grant_type=authorization_code&code=${code}&client_id=${client_id}&redirect_uri=${redirect_uri}&client_secret=${client_secret}`
            console.log(path)
            _axios.post(path).then(res => {
                if (res.status == 200) {
                    Cookie.setCookie('token', Base64.encode(res.data.access_token) + '=', res.data.expires_in / 3600 / 24 || 1)
                    useUser().userType = 1
                    window.$message.success(i18n.global.t('login.loginSuccess'))
                    useUser().getLocalstorageToken()
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
    }
</style>