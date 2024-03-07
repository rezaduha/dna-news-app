<template>
  <div class="card-news" @click="emit('on-read')">
    <img v-if="thumbnail" class="card-news__img" :src="thumbnail" :alt="'image of ' + thumbnail">
    <div class="card-news__body">
      <h2 class="card-news__title">{{ title }}</h2>
      <div class="card-news__info">
        <p class="card-news__info-source">{{ source }}</p>
        <span class="card-news__info-author">{{ author }}</span>
        &#x2022;
        <time class="card-news__info-date" :datetime="publishedAt">{{ formattedDate(publishedAt) }}</time>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useFormattedDate } from '@/composables/useFormattedDate'


const { formattedDate } = useFormattedDate()

defineProps({
  title: {
    type: String,
    required: true
  },
  source: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  publishedAt: {
    type: String,
    required: true
  },
  thumbnail: {
    type: String,
    required: true
  }
})

const emit = defineEmits(['on-read'])
</script>

<style scoped lang="postcss">
.card-news {
  @apply cursor-pointer flex items-start gap-4 hover:bg-slate-100 p-2 rounded-md transition-all my-2;

  &__img {
    @apply w-24 h-16 rounded object-cover mt-0.5;
  }

  &__title {
    @apply font-medium leading-tight;
  }

  &__info {
    @apply text-xs text-gray-500 mb-1;

    &-source {
      @apply text-base text-black font-medium mt-2;
    }
  }
}
</style>
