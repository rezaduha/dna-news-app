export interface Response {
  status: string
  totalResults: number
  articles: News[]
}

export interface News {
  source: Source
  author: string
  title: string
  description: string
  url: string
  urlToImage: string
  publishedAt: Date
}

export interface Source {
  id: string
  name: string
}
