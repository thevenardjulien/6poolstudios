import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(3),
  email: z.string().email().regex(/@/, "Invalid email"),
  message: z.string().min(10),
});

export type ContactFormType = z.infer<typeof contactFormSchema>;