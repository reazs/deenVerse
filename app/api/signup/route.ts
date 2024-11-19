import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import User, { IUser } from "@/lib/models/User";
import { hash } from "bcryptjs";
import { error } from "console";

export async function POST(req: Request) {
  await connectToDatabase();
  const { fullname, email, username, password } = await req.json();

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return NextResponse.json({ error: "User already exists" }, { status: 400 });
  }

  const hasedPassword = await hash(password, 10);
  const newUser: IUser = await User.create({
    fullname,
    username,
    email,
    password: hasedPassword,
  });

  return NextResponse.json({
    message: "User created successuflly",
    user: newUser,
  });
}
