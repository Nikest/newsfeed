<script setup lang="ts">
import { defineProps } from 'vue';
import { useStore } from '~/stores/main.store';

const store = useStore();

const props = defineProps<{
  postId: string;
  user: string;
  date: number;
  likeNumber: number;
  isLiked: boolean;
}>();

const onLike = () => {
  store.setLikedPost(props.postId);
};

const date = new Date(props.date);
const dateStr = `${date.getFullYear()} ${date.getMonth() + 1} ${date.getDate()}, ${date.getHours()}:${date.getMinutes()}`;
</script>

<template>
  <div class="flex justify-between gap-5">
    <ElementLikeButton :like-number="props.likeNumber" :is-liked="props.isLiked" :on-click="onLike" />
    <p class="text-sm text-colorDecoration hover:text-colorMainText flex gap-2">
      <span>Created by</span>
      <span class="font-bold">{{ props.user }} </span>
      <span>{{ dateStr }}</span>
    </p>
  </div>
</template>

<style scoped>

</style>