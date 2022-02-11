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
    import { ref, reactive, toRefs, watch, computed } from 'vue'
    import { useUser } from '@/store/index'
    import Cookie from '@/utils/Cookie'
    import { useI18n } from 'vue-i18n'
    export default {
        name: 'Radio',

        setup() {
            const { t, locale } = useI18n()
            let data = reactive({
                value: Cookie.getCookie('repoType'),
                types: [],
            })
            const userType = computed(() => useUser().userType)
            const repoType = computed(() => useUser().repoType)

            watch([locale, userType], () => {
                data.types = [
                    { value: "Github", label: "Github" },
                    { value: 'Gitee', label: 'Gitee' },
                    // { value: 'OSS', label: 'OSS' },
                    // { value: 'Upyun', label: t('upyun') }

                ]

                if (userType.value === 1) {
                    data.types = data.types.filter(item => item.value == repoType.value)
                }
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