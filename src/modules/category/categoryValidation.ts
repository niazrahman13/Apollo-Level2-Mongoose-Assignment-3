import { z } from 'zod';

const categoryZodSchema = z.object({
  name: z.string(),
});

export { categoryZodSchema };
