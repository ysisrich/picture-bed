<template>
    <div class="foot">
        <span>© {{projectName}} | {{record}}</span>
    </div>     
</template>

<script>
export default {
    name: 'Header',

    setup() {
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
    height: 60px;
    line-height: 60px;
    text-align:center;
    margin:auto;
}
</style>