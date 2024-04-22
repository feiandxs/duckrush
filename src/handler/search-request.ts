import { search } from 'duckduckgogogo';

import type { SearchRequestType } from '@/schema/search.schema';

const searchHandler = async (request: SearchRequestType) => {
  try {
    const serachResults = await search(request.query);
    return serachResults;
  } catch (err: any) {
    throw new Error('Failed to search:', err.message);
  }
};

export { searchHandler };
