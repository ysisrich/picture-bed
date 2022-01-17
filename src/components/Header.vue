<template>
    <div class="head">
        <div class="head-menu">
            <img class="head-logo" src="@/assets/img/logo.png" alt="" @click="toIndex">
            <Menu />
        </div>
    </div>
</template>

<script>

    import Menu from './Menu.vue'
    import { useRouter } from 'vue-router'
    export default {
        name: 'Header',
        components: {
            Menu
        },
        setup() {
            const router = useRouter()
            return {
                toIndex() {
                    router.push('/')
                }
            }
        }
    };
</script>

<style lang="scss" scoped>
    .head {
        width: 100%;

        &-menu {
            width: $main-width;
            height: 60px;
            margin: auto;
            @include flx(space-between, center);
        }

        &-logo {
            width: 180px;
            height: 100%;
            margin-top: 5px;
        }
    }
</style>