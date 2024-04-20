import { search } from 'duckduckgogogo';

import type { SearchRequestType } from '@/schema/search.schema';

const searchHandler = async (request: SearchRequestType) => {
  console.log(12312313);
  try {
    const serachResults = await search(request.query);
    console.log(serachResults);
    console.log('----------------');
  } catch (err: any) {
    console.error(err);
    console.log('==============');
  }

  return '132';
};

export { searchHandler };
