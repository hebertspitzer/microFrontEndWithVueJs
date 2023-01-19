<template>
  <div >
    <p class="text-5xl text-red-500 text-opacity-50 text-center">{{ Titulo }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { MFE_BORDER } from '../constants';

export default defineComponent({
  props: {
    Titulo: String
  },
  computed: {
    border: () => MFE_BORDER
  }
})
</script>