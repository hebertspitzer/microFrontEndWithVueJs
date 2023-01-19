<template>
  <div class="bg-gray-50">
    <div class="mx-auto max-w-7xl py-12 px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
      <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        <span class="block">{{ titulo }}</span>
        <span class="block text-indigo-600">{{ subTitulo }}</span>
      </h2>
      <div class="mt-8 flex lg:mt-0 lg:flex-shrink-0">
        <div class="inline-flex rounded-md shadow">
          <a :href="url1" class="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white hover:bg-indigo-700">{{ botao1 }}</a>
        </div>
        <div class="ml-3 inline-flex rounded-md shadow">
          <a :href="url2" class="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-indigo-600 hover:bg-indigo-50">{{ botao2 }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { TESTE } from '../constants';

export default defineComponent({
  props: {
    titulo: String,
    subTitulo: String,
    botao1: String,
    botao2: String,
    url1: String,
    url2: String,
  },
  computed: {
    color: () => TESTE
  },
  methods: {}
})
</script>