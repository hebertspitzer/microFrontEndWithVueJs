<template>
    <Header titulo="Menu de Teste" subTitulo="Usando micro front-end" botao1="Ir Para a pagina inicial" botao2="Mais informações" url1="http://localhost:8081/"/>
    <TituloPagina Titulo="Menu"/>
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