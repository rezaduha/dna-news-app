import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'
import type { News } from '@/api/types/news'
import { getSearchNews, getTopHeadlines } from '@/api/news'

export const useNewsStore = defineStore('news', () => {
  const topHeadlines = ref<News[]>()
  const searchNews = ref<News[]>()

  const state = reactive({
    isTopHeadlines: false,
    isSearch: false,
  })

  async function fetchTopHeadlines() {
    state.isTopHeadlines = true
    await getTopHeadlines()
      .then(response => {
        state.isTopHeadlines = false
        topHeadlines.value = response.articles
      })
      .catch(error => {
        state.isTopHeadlines = false
        topHeadlines.value = []
      })
  }

  async function fetchSearchNews(q: string) {
    state.isSearch = true
    await getSearchNews(q)
      .then(response => {
        state.isSearch = false
        searchNews.value = response.articles
      })
      .catch(error => {
        state.isSearch = false
        searchNews.value = []
      })
  }

  return { state, topHeadlines, fetchTopHeadlines, searchNews, fetchSearchNews }
})
