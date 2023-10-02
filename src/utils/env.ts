import { z } from 'zod'

export const env = z
	.object({
		BUN_ENV: z.string().nonempty(),
		PORT: z.string().nonempty()
	})
	.parse(Bun.env)
