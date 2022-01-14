<template>
    <div class="foot">
        <div id="websitTime"></div>
        <div>
            <span>© {{projectName}} | {{record}} </span>
            <span class="tags">
                <a v-for="(item,index) in shields" :key="`shields-${index}`" target="_blank" :href="item.href">
                    <img :src="item.src" :title="item.title">
                </a>
            </span>
        </div>
    </div>

</template>

<script>
    import runtime from '@/utils/runtime'
    import { onMounted } from 'vue'

    export default {
        name: 'Footer',

        setup() {
            onMounted(() => {
                setInterval(() => { runtime(document.querySelector('#websitTime')) }, 1000)
            })
            return {
                projectName: 'Git图床',
                record: '渝ICP备2020013404号',
                shields: [
                    {
                        title: '本站使用JsDelivr为静态资源提供CDN加速',
                        src: 'https://img.shields.io/badge/CDN-jsDelivr-orange?style=flat&amp;logo=jsDelivr',
                        href: 'https://www.jsdelivr.com/'
                    },
                    {
                        title: '本站项目由Gtihub托管',
                        src: 'https://img.shields.io/badge/Source-Github-d021d6?style=flat&amp;logo=GitHub',
                        href: 'https://github.com/'
                    }
                ]
            };
        }
    };
</script>

<style lang="scss" scoped>
    .foot {
        width: $main-width;
        /* height: 60px; */
        /* line-height: 60px; */
        text-align: center;
        margin: auto;
        padding: 15px 0 10px;

        .tags {
            margin-left: 10px;
            vertical-align: sub;

            a {
                margin-left: 10px;
            }
        }
    }
</style>