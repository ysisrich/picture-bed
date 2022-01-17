<template>
  <div class="content">
      <LoginForm />
  </div>
</template>

<script>
// 自定义组件
import LoginForm from "@/components/login/Index.vue";

export default {
  name: "Index",
  components: {
    LoginForm,
  },
};
</script>

<style lang="scss" scoped>
.content {
  width: $main-width;
  height: calc(100vh - 168px);
  margin: auto;
  text-align: center;
  box-sizing: border-box;
  @include flx(center,center);
}
</style>