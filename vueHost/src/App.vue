<template>
    <Header titulo="Teste de micro front-end" subTitulo="Usando Vue.js" botao1="Ir Para o menu" botao2="Mais informações" url1="http://localhost:8083/"/>
    <viewBody Titulo="Pagina de Vue.js" TextoPrincipal="Texto Principal da pagina Vue.js" Topico1="Primeiro Topico" texto1="Primeiro texto da Pagina Vue.js" Topico2=" Segundo Topico" texto2="Segundo texto da pagina Vue.js"/>
    <Footer />
</template>

<script lang="ts">
import { Component } from "Vue";
import Header from 'footerAndHeaderFolder/Header';
import Footer from 'footerAndHeaderFolder/Footer';
import viewBody from 'viewBodyFolder/viewBody';

export default {
  components: {
    Header,
    viewBody,
    Footer,
  },
  computed: {}
}
</script>