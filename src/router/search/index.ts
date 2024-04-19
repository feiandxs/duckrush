import { SearchRequestSchema } from '@/schema/search.schema';
import { Hono } from 'hono';

import type { Response } from '@/schema/response.schema';
import type { SearchRequestType, SearchResponse } from '@/schema/search.schema';
import { ZodIssue } from 'zod';

import { searchHandler } from '@/handler/search-request';

const searchRouter = new Hono();

searchRouter.post('/', async (c) => {
  const body = await c.req.json();
  console.log(body);
  const parsed = SearchRequestSchema.safeParse(body);
  if (!parsed.success) {
    return c.json({
      code: 400,
      message: 'Bad Request',
      data: parsed.error.errors,
    } as Response<ZodIssue[]>);
  }
  await searchHandler(parsed.data as SearchRequestType);
  return c.json({} as Response<SearchResponse>);
});

export { searchRouter };
