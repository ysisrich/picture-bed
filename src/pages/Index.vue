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

<script>
    import Upload from '@/components/Upload.vue'
    import Radio from '@/components/Radio.vue'
    import Alert from '@/components/Alert.vue'
    import Result from '@/components/Result.vue'

    export default {
        name: 'Index',
        components: {
            Alert,
            Radio,
            Upload,
            Result
        },
    };
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