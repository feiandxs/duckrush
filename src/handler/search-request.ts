import { search } from 'duckduckgogogo';

import type { SearchRequestType } from '@/schema/search.schema';

const searchHandler = async (request: SearchRequestType) => {
  try {
    const serachResults = await search(request.query);
    console.log(serachResults);
    console.log('----------------');
    return serachResults;
  } catch (err: any) {
    console.error(err);
    console.log('==============');
  }
};

export { searchHandler };
