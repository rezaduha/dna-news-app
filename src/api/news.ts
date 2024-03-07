import axiosInstance from "./axios"
import type { Response } from "./types/news"


export const getTopHeadlines = async (): Promise<Response> => {
  const response = await axiosInstance.get<Response>(`/top-headlines?country=us&pageSize=10`)
  return response.data
}

export const getSearchNews = async (q: string): Promise<Response> => {
  const response = await axiosInstance.get<Response>(`/everything?q=${q}`)
  return response.data
}
