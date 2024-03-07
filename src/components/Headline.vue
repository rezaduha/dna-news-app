<template>
  <div class="headline">
    <h2 class="headline__title">{{ title }}</h2>
    <p class="headline__description">{{ description }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
})
</script>

<style scoped lang="postcss">
.headline {
  @apply flex flex-col gap-2 mx-2 mb-6 w-full md:w-3/5 lg:w-1/2;

  &__title {
    @apply text-5xl;
  }

  &__description {
    @apply text-sm;
  }
}
</style>
