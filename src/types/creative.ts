import { z } from "zod";

export const createCreativeSchena = z.object({
  firstName: z.string().min(1, "Name is required"),
  lastName: z.string().min(1, "Surmame is required"),
  location: z.string().min(1, "Location is required"),
  username: z.string().min(1, "Username is required"),
  email: z.string().email().optional(),
  birthdate: z
    .date()
    .min(
      new Date(new Date().setFullYear(new Date().getFullYear() - 99)),
      "Creativity has no age limit but I'd recommend you double check your birthdate",
    )
    .max(
      new Date(new Date().setFullYear(new Date().getFullYear() - 16)),
      "You must be at least 16 to use the app",
    ),
});

export type CreateUser = z.infer<typeof createCreativeSchena>;

export const getUserSchema = z.object({ username: z.string() });

export type GetUser = z.infer<typeof getUserSchema>;
