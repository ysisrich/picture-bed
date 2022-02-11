<template>
    <div class="content">
        <n-space vertical>
            <n-image width="150" :src="userInfo.avatar_url" />
            <div>{{userInfo.login}}</div>
        </n-space>
    </div>
</template>

<script>
    import { useUser } from '@/store/index'
    import { reactive, toRefs, watch, computed } from 'vue'

    export default {
        name: "User",

        setup() {
            const data = reactive({
                userInfo: {}
            })
            const timer = setInterval(() => {
                if (useUser().git.userInfo.avatar_url) {
                    data.userInfo = useUser().git.userInfo
                    clearInterval(timer)
                }
            }, 200)

            return {
                ...toRefs(data)
            }
        }

    };
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