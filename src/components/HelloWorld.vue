<template>
  
</template>

<script  lang="ts">
import { ref } from 'vue'

export default {
  name:'HelloWorld',
  setup(){
    const msg = ref('1212')
    const count = ref(0)

    return{
      msg,
      count
    }
  }
}
</script>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
