<template>
  <div>
      <h1>Hello from Vue Teste</h1>
      <Header titulo="Menu de Teste" subTitulo="Usando micro front-end" botao1="Ir Para a pagina inicial" url1="http://localhost:8081/"/>
      <Footer />

      <p>teste</p>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from '@vue/composition-api'
  import Header from 'footerAndHeaderFolder/Header';
  import Footer from 'footerAndHeaderFolder/Footer'

  export default defineComponent({
    components: {
      Header,
      Footer
    }
  })
</script>