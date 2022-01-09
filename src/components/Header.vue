<template>
    <div class="head">
        <div class="head-menu">
            <div>
                <img class="head-logo" src="@/assets/img/logo.png" alt="">
            </div>
            <div>menu</div>
        </div>
    </div>     
</template>

<script>
export default {
    name: 'Header',

    setup() {
        
    }
};
</script>

<style lang="scss" scoped>
.head{
    width: 100%;
    &-menu{
        width: $main-width;
        height: 60px;
        margin:auto;
        @include flx(space-between,center);
    }
    &-logo{
        width: 180px;
        height: 100%;
        margin-top: 5px;
    }
}
</style>