import { z } from 'zod';

// export interface SearchRequest {
//   // The keyword or query to search for
//   query: string

//   // The number of results to return (optional)
//   count?: number

//   // Whether to include adult content in the results (optional, default is false)
//   allowAdult?: boolean

//   // Whether to allow empty results or require at least one result (optional, default is false)
//   allowEmptyResults?: boolean

//   // An array of search engine names to use (optional, likely has a default set of search engines)
//   searchEnglines?: string[]

//   // Whether to re-rank the search results (optional, default is false)
//   rerank?: boolean

//   // Whether to include additional details about the search results (optional, default is false)
//   withDetails?: boolean
// }

export const SearchRequestSchema = z.object({
  query: z.string(),
  count: z.number().optional(),
  allowAdult: z.boolean().optional(),
  allowEmptyResults: z.boolean().optional(),
  searchEnglines: z.array(z.string()).optional(),
  rerank: z.boolean().optional(),
  withDetails: z.boolean().optional(),
});

export type SearchRequestType = z.infer<typeof SearchRequestSchema>;

export interface SearchResult {
  // The title of the search result
  title: string

  // The URL of the search result
  url: string

  // The description of the search result
  description: string

  // The search engine that returned this result
  searchEngine: string

  // The rank of the search result
  rank: number

  // The timestamp of when the search result was returned
  timestamp: number

  // Additional details about the search result (optional)
  details?: Record<string, any>

}

export interface SearchResponse {

  // The search results
  results: SearchResult[]
}
