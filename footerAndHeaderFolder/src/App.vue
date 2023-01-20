<template>
<div style="grid-template-columns: 1fr 3fr 1fr;" class="">
  <div class="m-7">
  </div>
  <div class="m-7">
    <Header />
    <Footer />
  </div>
</div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import Header from './components/Header';
  import Footer from './components/Footer';

  export default defineComponent({
    components: {
      Header,
      Footer,
    }
  })
</script>