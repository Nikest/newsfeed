<script setup lang="ts">
import { defineProps } from 'vue';
const props = defineProps(['onInput']);
</script>

<template>
  <input
      type="text"
      class="w-full rounded-md bg-colorMain text-colorMainText p-2"
      placeholder="Title"
      @input="props.onInput"
  />
</template>

<style scoped>

</style>