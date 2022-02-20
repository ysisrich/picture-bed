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


    import { computed } from 'vue'
    import { useUser } from '@/store/index'
    import { useI18n } from 'vue-i18n'

    const experienceNumber = computed(() => useUser().experienceNumber)
    const userType = computed(() => useUser().userType)
    const { t, locale } = useI18n()

    setTimeout(() => {
        if (userType && userType.value == 1) {
            useUser().getLocalstorageToken()
        } else {
            window.$notification.success({
                title: t('message.title1'),
                content: t('message.content', { time: experienceNumber.value }),
                duration: 10000
            })
        }
    }, 1500)


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