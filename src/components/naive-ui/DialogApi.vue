<template>
    <div></div>
  </template>
   
  <script>
  import { defineComponent } from "vue";
  import { useDialog } from "naive-ui";
   
  export default defineComponent({
    setup() {
      window.$dialog = useDialog();
    },
  });
  </script>