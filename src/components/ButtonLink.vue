<template>
  <RouterLink :to="to" class="button-link">
    <span>{{ label }}</span>
  </RouterLink>
</template>

<script setup lang="ts">
defineProps({
  to: {
    type: String,
    required: true
  },
  label: {
    type: String,
    required: true
  }
})
</script>

<style scoped lang="postcss">
.button-link {
  @apply bg-black text-white py-3 px-6 font-light hover:bg-yellow-400 hover:text-black transition-all;
}
</style>
