<script setup lang="ts">
import { formUtils } from '~/utils';
import { useStore } from '~/stores/main.store';

const store = useStore();

const { register, reset, send, watchData } = formUtils<{
  title: string;
  content: string;
}>();

const onSend = send((formData) => {
  if (!formData.title || !formData.content) {
    return;
  }

  store.setNewPost(formData);
  reset();
});

let isValid = ref(false);

watchData((formData) => {
  if (formData.title && formData.content) {
    isValid.value = true;
    return
  }

  isValid.value = false;
});

</script>

<template>
  <aside class="flex w-full h-full flex-col justify-between">
    <UserMain />
    <div class="pt-5 flex flex-col gap-2">
      <PostInputTitle :onInput="register('title')" />
      <PostInputContent :onInput="register('content')" />
      <ElementButton icon="lucide:send" :on-click="onSend" :is-disabled="!isValid">Publish</ElementButton>
    </div>
  </aside>
</template>