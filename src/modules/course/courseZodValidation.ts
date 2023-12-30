import { z } from 'zod';

const tagSchema = z.object({
  name: z.string(),
  isDeleted: z.boolean(),
});

const courseDetailsSchema = z.object({
  level: z.string(),
  description: z.string(),
});

const courseZodValidation = z.object({
  title: z.string(),
  instructor: z.string(),
  categoryId: z.string(), // Assuming categoryId is a string, adjust as needed
  price: z.number(),
  tags: z.array(tagSchema),
  startDate: z.string(),
  endDate: z.string(),
  language: z.string(),
  provider: z.string(),
  durationInWeeks: z.number().int().positive().optional(),
  details: courseDetailsSchema.partial(),
}).partial();

export { courseZodValidation };
