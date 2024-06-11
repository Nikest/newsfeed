<script setup lang="ts">
import { useStore } from '~/stores/main.store';
import { computed } from 'vue';

const store = useStore();
const news = computed(() => store.news);
</script>

<template>
  <section class="grid-cols-1 grid gap-2">
    <NewsPost
        v-for="post in news"
        :key="post.id"
        :id="post.id"
        :title="post.title"
        :content="post.content"
        :user="post.user"
        :date="post.date"
        :like-number="post.likeNumber"
        :is-liked="post.isLiked"
    />
  </section>
</template>
