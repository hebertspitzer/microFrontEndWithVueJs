<template>
    <Header titulo="Menu de Teste" subTitulo="Usando micro front-end" botao1="Ir Para a pagina inicial" url1="http://localhost:8081/"/>
    <viewBody Titulo="Pagina de Menu" TextoPrincipal="Texto Principal da pagina Menu" Topico1="Primeiro Topico" texto1="Primeiro texto da Pagina Menu" Topico2=" Segundo Topico" texto2="Segundo texto da pagina Menu"/>
    <Footer />
</template>

<script lang="ts">
import { Component } from "Vue";
import Header from 'footerAndHeaderFolder/Header';
import viewBody from 'viewBodyFolder/viewBody';
import Footer from 'footerAndHeaderFolder/Footer';

export default {
  components: {
    Header,
    viewBody,
    Footer,
  },
  computed: {}
}
</script>