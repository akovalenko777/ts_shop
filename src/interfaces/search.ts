export interface ISearchItem {
  Title: string
  Year: string
  imdbID: string
  Type: 'movie' | 'series' | 'episode'
  Poster: string
}

export interface IResponse {
  Search?: ISearchItem[]
  totalResults?: string
  Response: 'True' | 'False'
  Error?: string
}