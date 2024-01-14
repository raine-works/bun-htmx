import { z } from 'zod'

export const env = z
	.object({
		PORT: z.string().nonempty()
	})
	.parse(Bun.env)
