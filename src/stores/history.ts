import type { History } from '@/api/types/history'
import { defineStore } from 'pinia'

export const useHistoryStore = defineStore('history', {
  state: () => ({
    history: [] as History[],
  }),
  actions: {
    addHistoryItem(item: History) {
      const exists = this.history.some((exist) => exist.url === item.url)
        if (exists) {
          return
        }
        this.history.push(item)
    },
  },
  persist: true,
})
