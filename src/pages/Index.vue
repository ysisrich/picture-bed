
<template>
    <div class="content">
        <n-upload action="https://www.mocky.io/v2/5e4bafc63100007100d8b70f">
            <n-upload-dragger>
              <div style="margin-bottom: 12px;">
                <n-icon size="48" :depth="3">
                  <archive-icon />
                </n-icon>
              </div>
              <n-text style="font-size: 16px;">点击或者拖动文件到该区域来上传</n-text>
              <n-p depth="3" style="margin: 8px 0 0 0;">
                请不要上传敏感数据，比如你的银行卡号和密码，信用卡号有效期和安全码
              </n-p>
            </n-upload-dragger>
          </n-upload>
    </div>
</template>

<script>
import {getAuthUserAllRepository} from '@/service/api';

import { ArchiveOutline as ArchiveIcon } from '@vicons/ionicons5'

import { 
    NUpload,
    NIcon,
    NUploadDragger,
    NP,
    NText
} from 'naive-ui'

export default {
    name: 'Index',
    components:{
        NUpload,
        NIcon,
        NUploadDragger,
        ArchiveIcon,
        NP,
        NText
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
    padding-top:50px;
    box-sizing: border-box;
}
</style>