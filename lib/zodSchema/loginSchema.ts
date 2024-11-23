import { z } from "zod";

const loginFormSchema = z.object({
  email: z.string().email("Invalid email!"),
  password: z
    .string()
    .min(7, "Password must be at least 7 characters.")
    .max(50),   
});

export default loginFormSchema;
