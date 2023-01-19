<template>
    <Header titulo="Teste de micro front-end" subTitulo="Usando Vue.js" botao1="Ir Para o menu" botao2="Mais informações" url1="http://localhost:8083/"/>
    <TituloPagina Titulo="Pagina"/>
  <div class="border-t bottom-0 left-0 h-15 fixed w-full">
    <HelloWorld/>
  </div>
    
</template>

<script lang="ts">
import { Component } from "Vue";
import TituloPagina from 'teste/TituloPagina';
import Header from 'teste/Header';
import HelloWorld from 'helloWorldTeste/HelloWorld';

export default {
  components: {
    TituloPagina,
    Header,
    HelloWorld,
  },
  computed: {}
}
</script>