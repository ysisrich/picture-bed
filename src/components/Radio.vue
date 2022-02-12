<template>
    <n-space style="margin-top: 10px;">
        <n-text style="line-height: 32px;">{{$t('repositories')}}：</n-text>
        <n-radio-group v-model:value="value" @update:value="changeRepoType">
            <n-radio-button v-for="item in types" :key="item.value" :value="item.value">
                {{ item.label }}
            </n-radio-button>
        </n-radio-group>

        <n-space v-if="show">
            <n-text style="line-height: 32px;">{{$t('repositoriesPath')}}：</n-text>
            <n-cascader style="width: 500px;" v-model:value="path" placeholder="选择你的仓库路径" :options="options"
                check-strategy="all" :show-path="true" remote :on-load="handleLoad" :on-update:value="handleUpdate"
                clearable />
        </n-space>
    </n-space>
</template>

<script>
    import { ref, reactive, toRefs, watch, computed } from 'vue'
    import { useUser } from '@/store/index'
    import Cookie from '@/utils/Cookie'
    import { useI18n } from 'vue-i18n'


    // function getChildren(option) {
    //     const children = []
    //     for (let i = 0; i <= option.depth; ++i) {
    //         children.push({
    //             label: option.label + '-' + i,
    //             value: option.value + '-' + i,
    //             depth: option.depth + 1,
    //             isLeaf: option.depth === 3
    //         })
    //     }
    //     return children
    // }

    export default {
        name: 'Radio',

        setup() {
            const { t, locale } = useI18n()
            let data = reactive({
                value: Cookie.getCookie('repoType'),
                types: [],
                // 路径
                path: null,
                options: [],
                show: false
            })
            const userType = computed(() => useUser().userType)
            const repoType = computed(() => useUser().repoType)
            const repoList = computed(() => useUser().repoList)

            const timer = setInterval(() => {
                console.log('仓库列表', repoList.value[0])
                if (repoList.value && repoList.value.length) {
                    repoList.value.forEach(item => {
                        let params = {
                            label: item.full_name,
                            value: item.full_name,
                            depth: 1,
                            isLeaf: true
                        }
                        data.options.push(params)
                    })
                    clearInterval(timer)
                }
            }, 200)
            setTimeout(() => clearInterval(timer), 2000)




            watch([locale, userType], () => {
                data.types = [
                    { value: "Github", label: "Github" },
                    { value: 'Gitee', label: 'Gitee' },
                    // { value: 'OSS', label: 'OSS' },
                    // { value: 'Upyun', label: t('upyun') }
                ]

                if (userType.value === 1) {
                    data.show = true
                    data.types = data.types.filter(item => item.value == repoType.value)
                } else {
                    data.show = false
                }
            }, { immediate: true })

            // 选择子路径
            const handleLoad = (option) => {
                console.log('optinon', option)
                // return new Promise((resolve) => {
                //     window.setTimeout(() => {
                //         option.children = getChildren(option)
                //         resolve()
                //     }, 1000)
                // })
            }

            const handleUpdate = (value) => {
                data.path = value
                useUser().handleRepoPath(value)
            }

            const changeRepoType = (repoType) => {
                useUser().changeRepoType(repoType)
            }

            return {
                ...toRefs(data),
                changeRepoType,
                handleLoad,
                handleUpdate
            };
        },
    }; 
</script>

<style lang="scss" scoped>
    ::v-deep(.n-base-selection-label) {
        text-align: left;
    }
</style>