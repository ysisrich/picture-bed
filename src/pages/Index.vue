
<template>
    <div class="content">
     <n-space vertical>
        <n-alert title="注意" type="info">
			<n-p style="margin: 0;">1. 游客限制每日上传3张，单张图片不能超过2M，上传的图片将公开显示</n-p>
			<n-p style="margin: 0;">2. 禁止上传博彩、色情等违法信息的图片</n-p>
        </n-alert>
        <Upload />
        </n-space>
    </div>
</template>

<script>
import { CloudUploadOutline as CloudUploadOutlineIcon } from '@vicons/ionicons5'
import Upload from '@/components/Upload.vue'


export default {
    name: 'Index',
    components:{
        CloudUploadOutlineIcon,
		Upload
    },

    setup() {


        return {
        }
    }
};
</script>

<style lang="scss" scoped>
.content {
    width: $main-width;
    height: calc(100vh - 168px);
    margin:auto;
    text-align: center;
    box-sizing: border-box;
}
</style>