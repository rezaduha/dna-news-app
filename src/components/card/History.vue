<template>
  <div class="card-history">
      <img v-if="thumbnail" class="card-history__img" :src="thumbnail" :alt="'image of' + title">
      <div class="card-history__body">
        <h2 class="card-history__title">{{ title }}</h2>
        <div class="card-history__info">
          <p class="card-history__info-sub">Source :</p>
          <span class="card-history__info-url" @click="emit('on-read')">{{ url }}</span>
        </div>
      </div>
    </div>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true
  },
  url: {
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
.card-history {
  @apply flex items-start gap-4 p-2 rounded-md transition-all my-2;

  &__img {
    @apply w-24 h-16 rounded object-cover mt-0.5;
  }

  &__title {
    @apply font-medium leading-tight;
  }

  &__info {
    @apply text-xs text-gray-500 mt-2;

    &-url {
      @apply cursor-pointer break-all hover:text-blue-600 transition-all;
    }
  }
}
</style>
