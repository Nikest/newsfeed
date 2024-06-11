<script setup lang="ts">
import { defineProps } from 'vue';
const props = defineProps<{
  onClick: () => void;
  icon: string;
  isDisabled?: boolean;
}>();
</script>

<template>
<button class="bg-colorDecoration disabled:bg-colorMain hover:bg-colorDecorationLight group h-10 rounded-md gap-5 flex justify-between items-center px-4 relative" @click="props.onClick" :disabled="props.isDisabled">
  <Icon :name="props.icon" class="text-colorMainText group-hover:text-colorMain group-disabled:text-colorMainText absolute top-3 left-4" />
  <span class="grow text-colorMainText group-hover:text-colorMain group-disabled:text-colorMainText">
    <slot />
  </span>
</button>
</template>
