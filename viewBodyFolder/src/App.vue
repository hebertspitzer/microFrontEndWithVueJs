<template>
<div style="grid-template-columns: 1fr 1fr 1fr;" class="flex justify-center">
  <viewBody class="m-3" />
</div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import viewBody from './components/viewBody';

  export default defineComponent({
    components: {
      viewBody,
    }
  })
</script>