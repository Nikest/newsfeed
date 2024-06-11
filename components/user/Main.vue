<script setup lang="ts">
import { useStore } from '~/stores/main.store';

const store = useStore();

const user = store.user;
</script>

<template>
  <header>
    <p class="font-bold text-colorMainText">
      <span v-if="user.id" class="font-light">Your temporary user: </span>
      <span>{{ user.firstName }} {{ user.lastName }}</span>
    </p>
  </header>
</template>
