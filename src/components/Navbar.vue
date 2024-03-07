<template>
  <header>
    <RouterLink to="/">
      <h1 id="brand">The News</h1>
    </RouterLink>
    <slot />
  </header>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<style scoped lang="postcss">
header {
  @apply flex items-center justify-between gap-8 px-2 py-12 flex-col lg:flex-row;
}

#brand {
  @apply text-7xl font-bold md:flex-grow;
}
</style>
