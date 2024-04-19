import { Hono } from 'hono'

import { pingRouter } from "@/router/ping";


const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello, Gia!')
})
app.route('/ping', pingRouter)

export default app
