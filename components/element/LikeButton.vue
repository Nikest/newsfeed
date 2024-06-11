<script setup lang="ts">
import { defineProps } from 'vue';
const props = defineProps<{
  likeNumber: number;
  isLiked: boolean;
  onClick: () => void;
}>();
</script>

<template>
  <button @click="props.onClick" class="w-14 flex justify-between pl-2 pr-2 pt-1 pb-1 items-center bg-colorMainLight hover:bg-colorDecoration disabled:bg-colorMainLight transition decoration-4 rounded-lg group" :disabled="props.isLiked">
    <Icon v-if="props.isLiked" name="icon-park-solid:like" color="#ffb0e3" />
    <Icon v-if="!props.isLiked" name="icon-park-outline:like" color="#fff" />
    <span>{{ props.likeNumber }}</span>
  </button>
</template>
