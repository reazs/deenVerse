import { z } from "zod";

const signupFormSchema = z.object({
  fullname: z
    .string()
    .min(5, "Your full name should be at least 5 characters.")
    .max(50, "Cannot accept longer than 50 characters for full name."),
  username: z
    .string()
    .min(3, "Username  must be at least 3 characters.")
    .max(50, "Username should not be longer than 50 characters"),
  email: z.string().email("Invalid Email"),
  password: z
    .string()
    .min(7, "Password must be at least 7 characters.")
    .max(50),
});

export default signupFormSchema;
