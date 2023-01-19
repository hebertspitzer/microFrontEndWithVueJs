<template>
<div style="grid-template-columns: 1fr 3fr 1fr;" class="">
  <div class="m-7">
    <TituloPagina />
  </div>
  <div class="m-7">
    <Header />
  </div>
</div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import TituloPagina from './components/TituloPagina';
  import Header from './components/Header';

  export default defineComponent({
    components: {
      TituloPagina,
      Header,
    }
  })
</script>