<template>
  <section id="index">
    <Headline 
      title="Top 10 Curated Breaking News"
      description="Stay Informed with the Latest Updates: Collection of Breaking News Unveiled. Read it now and Save Articles in Your Reading History for a Tailored Library of Insights. Explore Your Curated Collection Now." />
    <Shimmer v-if="state.isTopHeadlines" type="masonry" />
    <div class="index__container">
      <div class="index__container-zig">
        <div v-for="news, i in topHeadlines?.slice(0,5)" class="news" :key="i">
          <div class="news__body" @click="read(news)">
            <img v-if="news.urlToImage" class="news__img" :src="news.urlToImage" :alt="'image of ' + news.title">
            <h1 class="news__title">{{ news.title }}</h1>
            <p class="news__description">{{ news.description }}</p>
            <div class="news__info">
              <p class="news__info-source">{{ news.source.name }}</p>
              <span class="news__info-author">{{ news.author }}</span>
              &#x2022;
              <time class="news__info-date" :datetime="news.publishedAt.toString()">{{ formattedDate(news.publishedAt.toString()) }}</time>
            </div>
          </div>
        </div>
      </div>
      <div class="index__container-zag">
        <div v-for="news, i in topHeadlines?.slice(5,10)" class="news" :key="i">
          <div class="news__body" @click="read(news)">
            <img v-if="news.urlToImage" class="news__img" :src="news.urlToImage" :alt="'image of ' + news.title">
            <h1 class="news__title">{{ news.title }}</h1>
            <p class="news__description">{{ news.description }}</p>
            <div class="news__info">
              <p class="news__info-source">{{ news.source.name }}</p>
              <span class="news__info-author">{{ news.author }}</span>
              &#x2022;
              <time class="news__info-date" :datetime="news.publishedAt.toString()">{{ formattedDate(news.publishedAt.toString()) }}</time>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import type { History } from '@/api/types/history'
import { useHistoryStore } from '@/stores/history'
import { useNewsStore } from '@/stores/news'
import { storeToRefs } from 'pinia'
import { useFormattedDate } from '@/composables/useFormattedDate'
import Shimmer from '@/components/Shimmer.vue'
import Headline from '@/components/Headline.vue'


const newsStore = useNewsStore()
const historyStore = useHistoryStore()

const { fetchTopHeadlines } = newsStore
const { state, topHeadlines } = storeToRefs(newsStore)
const { formattedDate } = useFormattedDate()

function read(newsItem: History) {
  historyStore.addHistoryItem({
    title: newsItem.title,
    url: newsItem.url,
    urlToImage: newsItem.urlToImage
  })
  window.open(newsItem.url, '_blank')
}

onMounted(() => {
  fetchTopHeadlines()
})
</script>

<style scoped lang="postcss">
#index {
  .index__container {
    @apply flex flex-col sm:flex-row sm:flex-wrap;

    &-zig, &-zag {
      @apply flex w-full sm:w-1/2 flex-wrap lg:flex-row transition-all;

      .news {
        @apply w-full lg:w-1/2 p-1 transition-all;

        &__body {
          @apply p-2 cursor-pointer hover:bg-slate-100 rounded-lg transition-all duration-500;
        }

        &__img {
          @apply rounded-md text-xs mb-2;
        }

        &__title {
          @apply text-lg font-medium leading-tight;
        }

        &__description {
          @apply text-sm font-light
        }

        &__info {
          @apply text-xs text-gray-500 mt-4 mb-2;

          &-source {
            @apply text-black mb-1 font-medium;
          }
        }
      
        &:first-of-type {
          @apply w-full;
        }
      }
    }

    &-zag .news:last-of-type {
      @apply w-full;
    }

    &-zag .news:first-of-type {
      @apply w-full lg:w-1/2;
    }
  }
}
</style>
