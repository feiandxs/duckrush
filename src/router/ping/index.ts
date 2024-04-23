import { Hono } from 'hono';

import type { Response } from '@/schema/response.schema';
// env get
import { env } from 'hono/adapter';

const pingRouter = new Hono();

pingRouter.get('/', async (c) => {
  // auth
  const { token } = env<{ token: string }>(c);
  const Authorization = c.req.header('Authorization');
  if (token) {
    if (!Authorization) {
      return c.json({
        code: 401,
        message: 'Unauthorized',
      } as Response<null>);
    }

    if (Authorization !== `Bearer ${token}`) {
      return c.json({
        code: 401,
        message: 'Unauthorized',
      } as Response<null>);
    }
  }

  const response: Response<string> = {
    code: 0,
    message: 'pong',
    data: 'pong',
  };
  return c.json(response);
});

export default pingRouter;
