<template>
  <footer class="p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
    <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023. Todos os direitos reservados.
    </span>
    <ul class="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <a href="#" class="mr-4 hover:underline md:mr-6 ">Sobre</a>
        </li>
        <li>
            <a href="#" class="mr-4 hover:underline md:mr-6">Politica de Privacidade</a>
        </li>
        <li>
            <a href="#" class="mr-4 hover:underline md:mr-6">Licença</a>
        </li>
        <li>
            <a href="#" class="hover:underline">Contato</a>
        </li>
    </ul>
</footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {},
  computed: {},
  methods: {}
})
</script>