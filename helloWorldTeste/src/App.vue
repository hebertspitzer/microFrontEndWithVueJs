<template>
<div style="grid-template-columns: 1fr 1fr 1fr;" class="flex justify-center">
  <HelloWorld class="m-3" />
</div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import HelloWorld from './components/HelloWorld';

  export default defineComponent({
    components: {
      HelloWorld,
    }
  })
</script>