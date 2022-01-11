<template>
    <div></div>
  </template>
   
  <script>
  import { defineComponent } from "vue";
  import { useLoadingBar } from "naive-ui";
   
  export default defineComponent({
    setup() {
      window.$loadingBar = useLoadingBar();
    },
  });
  </script>