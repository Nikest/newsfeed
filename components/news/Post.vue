<script setup lang="ts">
import { defineProps } from 'vue';
const props = defineProps<{
  id: string;
  content: string;
  title: string;
  user: string;
  date: number;
  likeNumber: number;
  isLiked: boolean;
}>();
</script>

<template>
  <article class="grid grid-cols-1 gap-3 bg-colorMain p-3 rounded  text-colorMainText">
    <NewsHeader>{{ props.title }}</NewsHeader>

    <pre class="text-base font-main text-wrap">{{ props.content }}</pre>

    <NewsFooter
        :user="props.user"
        :date="props.date"
        :like-number="props.likeNumber"
        :is-liked="props.isLiked"
        :post-id="id"
    />
  </article>
</template>