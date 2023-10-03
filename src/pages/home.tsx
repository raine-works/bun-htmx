import { Elysia, t } from 'elysia'
import { html } from '@elysiajs/html'
import Root from '../root'

export const home = new Elysia().use(html()).get('/', () => (
	<Root>
		<div class="h-screen flex justify-center items-center">
			<div class="p-10 rounded-lg bg-gray-300">
				<form
					id="form"
					hx-post="/api/submit"
					hx-target="#form"
					hx-swap="outerHTML"
					hx-indicator="#spinner"
					class="flex flex-col"
				>
					<input
						type="text"
						required="true"
						name="firstName"
						placeholder="First Name"
						class="py-2 px-4 rounded-lg mb-2"
					/>
					<input
						type="text"
						required="true"
						name="lastName"
						placeholder="Last Name"
						class="py-2 px-4 rounded-lg mb-2"
					/>
					<button class="py-2 px-4 border-3 border-gray-800 rounded-lg text-gray-800 font-bold flex justify-center">
						Submit
						<img id="spinner" class="htmx-indicator h-6 ml-2" src="https://htmx.org/img/bars.svg" />
					</button>
				</form>
			</div>
		</div>
	</Root>
))

home.post(
	'/api/submit',
	async ({ body }) => {
		await Bun.sleep(3000)
		console.log(body)
		return (
			<>
				<div class="flex flex-col justify-center items-center">
					<h1 class="mb-4">Thank you {body.firstName}</h1>
					<button
						class="py-2 px-4 rounded-lg bg-gray-800 text-white"
						hx-get="/"
						hx-target="body"
						hx-swap="outerHTML"
					>
						Reset
					</button>
				</div>
			</>
		)
	},
	{
		body: t.Object({
			firstName: t.String(),
			lastName: t.String()
		})
	}
)
