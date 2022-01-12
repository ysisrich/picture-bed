<template>
    <n-spin :show="show" v-if="content.length">
        <n-card title="" v-show="content.length">
            <n-image width="400" height="200" object-fit="cover" :src="content" :preview-disabled="false"
                @load="imgLoadFinish" @error="imgLoadError" />
            <div style="width: 100%; margin-left: 20px;">
                <div class="links">
                    <n-text class="text">URL</n-text>
                    <n-input class="input" ref="inputInstRef" v-model:value="inputValue1" />
                    <n-button type="success" @click="handleCopy(inputValue1)">复制</n-button>
                </div>
                <div class="links">
                    <n-text class="text">HTML</n-text>
                    <n-input class="input" ref="inputInstRef" v-model:value="inputValue2" />
                    <n-button type="success" @click="handleCopy(inputValue2)">复制</n-button>
                </div>
                <div class="links">
                    <n-text class="text">Markdown</n-text>
                    <n-input class="input" ref="inputInstRef" v-model:value="inputValue3" />
                    <n-button type="success" @click="handleCopy(inputValue3)">复制</n-button>
                </div>
            </div>
        </n-card>
    </n-spin>
</template>

<script>
    import { reactive, toRefs, computed, ref } from 'vue'
    import { useContent } from '@/store/index'
    export default {
        name: 'Result',

        setup() {
            let data = reactive({
                show: true
            })


            const content = computed(() => useContent().content)
            const imgLoadFinish = (e) => {
                data.show = false
            }
            const imgLoadError = (e) => {
                data.show = true
            }


            const handleCopy = (text) => {
                var _input = document.createElement("input");   // 直接构建input
                _input.value = text;  // 设置内容
                document.body.appendChild(_input);    // 添加临时实例
                _input.select();   // 选择实例内容
                document.execCommand("Copy");   // 执行复制
                document.body.removeChild(_input); // 删除临时实例
                window.$message.success('复制成功！')
            }


            return {
                ...toRefs(data),
                content,
                inputValue1: computed(() => useContent().content),
                inputValue2: `<img src="${computed(() => useContent().content).value}" />`,
                inputValue3: `![](${computed(() => useContent().content).value})`,
                imgLoadFinish,
                imgLoadError,
                handleCopy
            };
        },
    };
</script>

<style lang="scss" scoped>
    ::v-deep .n-card__content {
        display: flex;


        .links {
            display: flex;
            margin-bottom: 15px;

            .text {
                width: 100px;
                height: 34px;
                line-height: 34px;
            }

            .input {
                margin: 0 10px;
            }

            .n-input__input {
                text-align: left;
            }

        }

    }
</style>