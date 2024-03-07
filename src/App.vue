<template>
  <main>
    <Navbar>
      <div class="flex gap-8 w-full md:w-auto">
        <div class="search">
          <input ref="inputRef" class="w-full search__input" type="text" v-model="q" placeholder="search news">
          <div v-if="q" class="search__result">
            <Shimmer v-if="state.isSearch" type="list" :count="3" />
            <CardNews 
              v-else
              v-for="news, i in searchNews"
              :key="i"
              :title="news.title"
              :source="news.source.name"
              :author="news.author"
              :publishedAt="news.publishedAt.toString()"
              :thumbnail="news.urlToImage"
              @on-read="read(news)"/>
          </div>
        </div>
        <ButtonLink to="/history" label="Read History" />
      </div>
    </Navbar>
    <RouterView />
  </main>
</template>

<script setup lang="ts">
import type { History } from '@/api/types/history'
import { ref, watch } from 'vue';
import { RouterView } from 'vue-router'
import { useNewsStore } from '@/stores/news'
import { useHistoryStore } from './stores/history'
import { storeToRefs } from 'pinia'
import Navbar from '@/components/Navbar.vue'
import ButtonLink from '@/components/ButtonLink.vue'
import CardNews from '@/components/card/News.vue'
import Shimmer from '@/components/Shimmer.vue'
import useClickOutside from '@/composables/useClickOutside'


const inputRef = ref()
const q = ref("")

const newsStore = useNewsStore()
const historyStore = useHistoryStore()

const { fetchSearchNews } = newsStore
const { state, searchNews } = storeToRefs(newsStore)

function read(newsItem: History) {
  historyStore.addHistoryItem({
    title: newsItem.title,
    url: newsItem.url,
    urlToImage: newsItem.urlToImage
  })
  window.open(newsItem.url, '_blank')
}

watch(q, (newValue, _) => {
  if (newValue) {
    fetchSearchNews(newValue)
  }
})

useClickOutside(inputRef, () => { 
  q.value = ""
})
</script>

<style scoped lang="postcss">
main {
  @apply max-w-screen-xl mx-auto;
}

.search {
  @apply relative flex-1 flex flex-col;

  &__input {
    @apply bg-transparent font-light p-2 text-right focus:text-left border-b transition-all duration-700;

    &:focus, &:not(:placeholder-shown) {
      @apply border-b border-black md:w-96 text-left;
    }
  }

  &__result {
    @apply bg-white absolute top-12 left-0 p-4 w-full max-h-[80vh] rounded-lg shadow-[0_12px_60px_-12px_rgba(0,0,0,0.15)] overflow-scroll;
  }
}
</style>
