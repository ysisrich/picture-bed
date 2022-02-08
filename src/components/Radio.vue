<template>
    <n-space style="margin-top: 10px;">
        <n-text style="line-height: 32px;">{{$t('repositories')}}：</n-text>
        <n-radio-group v-model:value="value" @update:value="changeRepoType">
            <n-radio-button v-for="item in types" :key="item.value" :value="item.value">
                {{ item.label }}
            </n-radio-button>
        </n-radio-group>
    </n-space>
</template>

<script>
    import { ref, reactive, toRefs, watch } from 'vue'
    import { useUser } from '@/store/index'
    import Cookie from '@/utils/Cookie'
    import { useI18n } from 'vue-i18n'
    export default {
        name: 'Radio',

        setup() {
            const { t, locale } = useI18n()
            let data = reactive({
                value: Cookie.getCookie('repoType'),
                types: [
                    { value: "Github", label: "Github" },
                    { value: 'Gitee', label: 'Gitee' },
                    // { value: 'OSS', label: 'OSS' },
                    // { value: 'Upyun', label: t('upyun') }

                ],
            })
            watch(locale, () => {
                data.types.some(item => {
                    if (item.value == 'Upyun') {
                        item.label = t('upyun')
                        return true
                    }
                })
            }, { immediate: true })

            const changeRepoType = (repoType) => {
                useUser().changeRepoType(repoType)
            }

            return {
                ...toRefs(data),
                changeRepoType
            };
        },
    }; 
</script>