<script setup lang="ts">
import { defineProps } from 'vue';
const props = defineProps(['onInput']);
</script>

<template>
<textarea class="w-full rounded-md h-40 bg-colorMain text-colorMainText p-2" placeholder="Write news here" @input="props.onInput" />
</template>