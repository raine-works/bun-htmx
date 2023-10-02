import { z } from 'zod';

const envSchema = z.object({
    BUN_ENV: z.string().nonempty(),
    PORT: z.string().nonempty()
});

export const env = envSchema.parse(Bun.env);
