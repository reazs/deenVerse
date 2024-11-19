import { compare } from "bcryptjs";

export async function verifyPassword(
  inputPassword: string,
  hashedPassword: string
) {
  return await compare(inputPassword, hashedPassword);
}
