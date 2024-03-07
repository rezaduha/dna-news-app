<template>
  <section id="history">
    <Headline 
      title="Your Reading History"
      description="Reading History: Explore and save articles. Your personalized library of insights and stories awaits. Dive into your curated collection now." />
    <section class="history-container">
      <CardHistory 
        v-for="news, i in historyItems"
        :key="i"
        :title="news.title"
        :url="news.url"
        :thumbnail="news.urlToImage"
        @on-read="read(news.url)" />
    </section>
  </section>
</template>

<script setup lang="ts">
import { useHistoryStore } from '@/stores/history'
import { computed } from 'vue'
import Headline from '@/components/Headline.vue';
import CardHistory from '@/components/card/History.vue'


const historyStore = useHistoryStore()
const historyItems = computed(() => historyStore.history)

function read(url: string) {
  window.open(url, '_blank')
}
</script>

<style scoped lang="postcss">
.history-container {
  @apply grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4;
}
</style>
