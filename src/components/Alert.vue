<template>
    <n-alert title="注意" type="info">
        <n-p style="margin: 0;">1. 游客限制每日上传6张，单张图片不能超过2M，上传的图片将公开显示，禁止上传博彩、色情等违法信息的图片</n-p>
        <n-p style="margin: 0;">2. GitHub 单个图床仓库大小不能超过1G，否则容易被封，建议在 1G 之前就换个仓库</n-p>
        <n-p style="margin: 0;">3. JSD 加速的单文件大小为 50M，因此也就意味着登录账户上传的单文件大小不超过 50MB</n-p>
        <n-p style="margin: 0;">4. Gitee 访问超过1M的图片需要密码登录认证，所以Gitee上传图片限制1M</n-p>
    </n-alert>
</template>

<script>

    export default {
        name: 'Alert',
    };
</script>