<template>
    <n-spin :show="show" v-if="content.length">
        <n-card title="" v-show="content.length">
            <n-image width="400" height="200" object-fit="cover" :src="content" @load="imgLoadFinish"
                @error="imgLoadError" />
            <div style="width: 100%; margin-left: 20px;">
                <div class="links" v-for="(item,index) in inputs" :key="`link-${index}`">
                    <n-text class="text">{{item.name}}</n-text>
                    <n-input class="input" v-model:value="item.inputValue.value" />
                    <n-button type="success" @click="handleCopy(item.inputValue.value)">{{$t('copy')}}</n-button>
                </div>
            </div>
        </n-card>
    </n-spin>
</template>

<script>
    import { reactive, toRefs, computed, ref, watch } from 'vue'
    import { useContent } from '@/store/index'
    import { storeToRefs } from 'pinia'
    import { useI18n } from 'vue-i18n'

    export default {
        name: 'Result',

        setup() {
            let data = reactive({
                show: true
            })
            const { t, locale } = useI18n()
            const { content } = storeToRefs(useContent())
            const MESSAGE = {}
            watch(locale, () => {
                MESSAGE.loadImgError = t('message.loadImgError')
            }, { immediate: true })

            const imgLoadFinish = (e) => {
                data.show = false
            }
            const imgLoadError = (e) => {
                data.show = true
                window.$message.error(MESSAGE.loadImgError)
            }

            const handleCopy = (text) => {
                var _input = document.createElement("input");
                _input.value = text;
                document.body.appendChild(_input);
                _input.select();
                document.execCommand("Copy");
                document.body.removeChild(_input);
                window.$message.success('复制成功！')
            }


            return {
                ...toRefs(data),
                content,
                inputs: [
                    { name: 'URL', inputValue: computed(() => useContent().content) },
                    { name: 'HTML', inputValue: computed(() => useContent().html) },
                    { name: 'Markdown', inputValue: computed(() => useContent().markdown) },
                    { name: 'WXML', inputValue: computed(() => useContent().wxml) }
                ],
                imgLoadFinish,
                imgLoadError,
                handleCopy
            };
        },
    };
</script>

<style lang="scss" scoped>
    ::v-deep(.n-card__content) {
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