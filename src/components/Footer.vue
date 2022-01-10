<template>
    <div class="foot">
        <div id="websitTime"></div>
        <div>
            <span>© {{projectName}} | {{record}} </span>
            <span class="tags">
                <a target="_blank" href="https://www.jsdelivr.com/" rel="external nofollow noreferrer" style="text-decoration:none;">
                    <img src="https://img.shields.io/badge/CDN-jsDelivr-orange?style=flat&amp;logo=jsDelivr"  title="本站使用JsDelivr为静态资源提供CDN加速"  >
                </a>
                <a target="_blank" href="https://github.com/" rel="external nofollow noreferrer" style="text-decoration:none;">
                    <img src="https://img.shields.io/badge/Source-Github-d021d6?style=flat&amp;logo=GitHub" title="本站项目由Gtihub托管"  >
                </a>
            </span>
            
        </div>
    </div>     

</template>

<script>
import runtime from '@/hooks/websiteRunTime'
import {onMounted} from 'vue'

export default {
    name: 'Header',

    setup() {
        onMounted(() => {
            setInterval(()=>{runtime(document.querySelector('#websitTime'))},1000)
        })
        return {
            projectName:'Git图床',
            record:'渝ICP备2020013404号'
        };
    }
};
</script>

<style lang="scss" scoped>
.foot {
    width: $main-width;
    /* height: 60px; */
    /* line-height: 60px; */
    text-align:center;
    margin:auto;
    padding:15px 0 10px;
    .tags{
        margin-left: 10px;
        vertical-align: sub;
        a{
            margin-left: 10px;
        }
    }
}
</style>