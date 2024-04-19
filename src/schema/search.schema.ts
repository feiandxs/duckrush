export interface SearchRequest {
  // The keyword or query to search for
  query: string

  // The number of results to return (optional)
  count?: number

  // Whether to include adult content in the results (optional, default is false)
  allowAdult?: boolean

  // Whether to allow empty results or require at least one result (optional, default is false)
  allowEmptyResults?: boolean

  // An array of search engine names to use (optional, likely has a default set of search engines)
  searchEnglines?: string[]

  // Whether to re-rank the search results (optional, default is false)
  rerank?: boolean

  // Whether to include additional details about the search results (optional, default is false)
  withDetails?: boolean
}
