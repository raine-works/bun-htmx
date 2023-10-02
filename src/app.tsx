import { env } from './utils/env'
import { Elysia } from 'elysia'
import { html } from '@elysiajs/html'
import { home } from './pages/home'
import pkg from '../package.json'

const app = new Elysia().use(html())

// Register routes
app.use(home)

// Handle errors
app.onError(({ error }) => {
	return new Response(error.message)
})

// Start application server
app.listen(env.PORT, (srv) => {
	console.log(`App: http://${srv.hostname}:${srv.port} - Environment: ${env.BUN_ENV} - Version: v${pkg.version}`)
})
