import { z } from 'zod';

const reviewZodSchema = z.object({
  courseId: z.string(),
  rating: z.number().min(1).max(5),
  review: z.string().min(1),
});

export { reviewZodSchema };
