import { SearchRequestSchema } from '@/schema/search.schema';
import { Hono } from 'hono';

import type { Response } from '@/schema/response.schema';
import type { SearchRequestType, SearchResult, SearchResponse } from '@/schema/search.schema';
import { ZodIssue } from 'zod';

import { searchHandler } from '@/handler/search-request';

const searchRouter = new Hono();

searchRouter.post('/', async (c) => {
  const body = await c.req.json();
  const parsed = SearchRequestSchema.safeParse(body);
  if (!parsed.success) {
    return c.json({
      code: 400,
      message: 'Bad Request',
      data: parsed.error.errors,
    } as Response<ZodIssue[]>);
  }
  try {
    const searchResults = await searchHandler(parsed.data as SearchRequestType);
    if (!searchResults) {
      return c.json({
        code: 500,
        message: 'Internal Server Error',
      } as Response<null>);
    }
    const results: SearchResult[] = [];

    searchResults.results.forEach((result, index) => {
      results.push({
        title: result.title,
        url: result.url,
        description: result.description,
        searchEngine: 'DuckDuckGo',
        rank: index + 1,
        timestamp: Date.now(),
      });
    });

    return c.json({
      code: 0,
      message: 'OK',
      data: {
        results,
      } as SearchResponse,
    } as Response<SearchResponse>);
  } catch (err: any) {
    return c.json({
      code: 500,
      message: `Internal Server Error：${err.message}`,
    } as Response<null>);
  }
});

export { searchRouter };
