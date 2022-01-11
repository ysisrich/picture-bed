
<template>
    <div class="content">
     <n-space vertical>
        <n-alert title="注意" type="info">
            游客限制每日上传3张，单张图片不能超过5M，上传的图片将公开显示，使用之前请先阅读《使用协议》，上传博彩等违法信息的，直接提交公安机关处理
        </n-alert>
        <n-upload action="https://www.mocky.io/v2/5e4bafc63100007100d8b70f">
            <n-upload-dragger>
              <div style="margin-bottom: 12px;">
                <n-icon size="48" :depth="3">
                  <archive-icon />
                </n-icon>
              </div>
              <n-text style="font-size: 16px;">点击或者拖动文件到该区域来上传</n-text>
              <n-p depth="3" style="margin: 8px 0 0 0;">
                支持的图片格式有png、jpg、jpeg、gif、wbmp、ico等，单张图片大小不能超过50M
              </n-p>
            </n-upload-dragger>
          </n-upload>
        </n-space>
    </div>
</template>

<script>
import {getAuthUserAllRepository} from '@/service/api';

import { ArchiveOutline as ArchiveIcon } from '@vicons/ionicons5'


export default {
    name: 'Index',
    components:{
        ArchiveIcon
    },

    setup() {

        const get = () =>{
            let params = {}
            getAuthUserAllRepository(params,{username:'ysisrich',repo:'Assets'}).then(res=>{
                console.log(res)
            })
        }

        return {
            get
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
    ::v-deep .n-upload-trigger{
        display: block;
    }
}
</style>