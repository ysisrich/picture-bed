<template>
    <n-alert :title="$t('attention')" type="info" v-if="currentPage == 'index'">
        <n-p style="margin: 0;">{{ $t("notice.one") }}</n-p>
        <n-p style="margin: 0;">{{ $t("notice.two") }}</n-p>
        <n-p style="margin: 0;">{{ $t("notice.three") }}</n-p>
        <n-p style="margin: 0;">{{ $t("notice.four") }}</n-p>
    </n-alert>
    <n-alert :title="$t('attention')" type="info" v-if="currentPage == 'login'">
        <n-p style="margin: 0;">{{ $t("notice._one") }}</n-p>
        <n-p style="margin: 0;">{{ $t("notice._two") }}</n-p>
        <n-p style="margin: 0;">{{ $t("notice._three") }}</n-p>
    </n-alert>
</template>

<script>

    export default {
        name: 'Alert',
        props: {
            currentPage: {
                type: String,
                default: ''
            }
        }
    };
</script>