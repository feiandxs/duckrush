import { Hono } from "hono";

import type {Response} from "@/schema/response.schema";

const pingRouter = new Hono();

pingRouter.get("/", (c) => {
  const response: Response<string> = {
    code: 0,
    message: "pong",
    data: "pong",
  };
  return c.json(response);
});

export { pingRouter }
