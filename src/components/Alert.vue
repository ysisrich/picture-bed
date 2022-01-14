<template>
    <n-alert :title="$t('attention')" type="info">
        <n-p style="margin: 0;">{{ $t("notice.one") }}</n-p>
        <n-p style="margin: 0;">{{ $t("notice.two") }}</n-p>
        <n-p style="margin: 0;">{{ $t("notice.three") }}</n-p>
        <n-p style="margin: 0;">{{ $t("notice.four") }}</n-p>
    </n-alert>
</template>

<script>

    export default {
        name: 'Alert',
    };
</script>