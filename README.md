# Gia

A simple and fast backend API, based on Hono, that can search the internet for content related to a given keyword and convert it into a format suitable for processing by a large language model (LLM).

Supports deployment on Cloudflare.

```shell
npm install
npm run dev
```

```shell
npm run deploy
```

## Request Params

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| query | string | Yes | The keyword or query to search for |
| count | number | No | The number of results to return |
| allowAdult | boolean | No | Whether to include adult content in the results, defaults to false |
| allowEmptyResults | boolean | No | Whether to allow empty results or require at least one result, defaults to false |
| searchEnglines | string[] | No | An array of search engine names to use, likely has a default set |
| rerank | boolean | No | Whether to re-rank the search results, defaults to false |
| withDetails | boolean | No | Whether to include additional details about the search results, defaults to false |
