<script setup lang="ts">
import { onBeforeMount, watch, computed, onMounted } from 'vue';
import { io } from 'socket.io-client';
import { useStore } from '~/stores/main.store';
import Cookies from 'js-cookie';
import { createRandomUser } from '~/utils';

const store = useStore();
const { user, newPost } = store;
const likedPost = computed(() => store.likedPost);
const updateHash = computed(() => store.lastUpdateHash);
const socket = io("http://localhost:3001");

onBeforeMount(() => {
  const userInCookies = JSON.parse(Cookies.get('user') || '{}');
  if (!user.id) {
    store.setUser(userInCookies || createRandomUser());
  }

  socket.on('updateHash', (hash: string) => {
    store.setUpdateHash(hash);
  });

  socket.on('newsAll', (newsAll) => {
    store.setNewsPosts(newsAll);
  });

  socket.on('newPost', (newPost) => {
    store.addNewPost(newPost);
  });

  socket.on('updateLikes', ({ likes }) => {
    store.updateLikes(likes);
  });

  socket.emit('newsAll', { userId: user.id });
});

watch(likedPost, () => {
  socket.emit('likePost', {
    postId: likedPost.value,
    userId: user.id,
  });
});

watch(newPost, () => {
  socket.emit('newPost', {
    post: newPost,
    user,
  });
});

onMounted(() => {
  setInterval(() => {
    const postIds = store.news.map((post) => post.id);
    socket.emit('getLikes', { postIds, lastUpdatedHash: updateHash.value, userId: user.id });
  }, 5000);
});

</script>

<template>
<div>
  <slot />
</div>
</template>

<style scoped>

</style>