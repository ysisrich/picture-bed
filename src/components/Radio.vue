<template>
    <n-space style="margin-top: 10px;">
        <n-text style="line-height: 32px;">仓库地址：</n-text>
        <n-radio-group v-model:value="value" @update:value="changeRepoType">
            <n-radio-button v-for="item in types" :key="item.value" :value="item.value">
                {{ item.label }}
            </n-radio-button>
        </n-radio-group>
    </n-space>
</template>

<script>
    import { ref, reactive, toRefs } from 'vue'
    import { useUser } from '@/store/index'
    import Cookie from '@/hooks/Cookie'
    export default {
        name: 'Radio',

        setup() {
            let data = reactive({
                value: Cookie.getCookie('repoType'),
                types: [
                    { value: "Github", label: "Github" },
                    { value: 'Gitee', label: 'Gitee' }
                ],
            })

            const changeRepoType = (e) => {
                useUser().changeRepoType()
            }

            return {
                ...toRefs(data),
                changeRepoType
            };
        },
    }; </script>

<style lang="scss" scoped>

</style>