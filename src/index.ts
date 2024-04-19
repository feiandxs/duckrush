import { Hono } from 'hono'

import { pingRouter } from "@/router/ping";
import { searchRouter } from "@/router/search";


const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello, Gia!')
})
app.route('/ping', pingRouter)
app.route('/search', searchRouter)

export default app
