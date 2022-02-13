<template>
  <div class="content">
    <n-space vertical>
      <Alert currentPage="login" />
      <LoginForm />
    </n-space>
  </div>
</template>

<script setup>
  // 自定义组件
  import LoginForm from "@/components/login/Index.vue";
  import Alert from '@/components/Alert.vue'
</script>

<style lang="scss" scoped>
  .content {
    width: $main-width;
    height: calc(100vh - 168px);
    margin: auto;
    text-align: center;
    box-sizing: border-box;
    /* @include flx(center,center); */
  }
</style>