import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import User, { IUser } from "@/lib/models/User";
import connectToDatabase from "@/lib/mongodb";
import { NextResponse } from "next/server";
import { error } from "console";

export async function GET(req: Request) {
  await connectToDatabase();

  const session = await getServerSession(authOptions);
  if (!session?.user) {
    return new Response("Unauthorized", { status: 401 });
  }
  console.log(session.user.email, "---------> api");
  const user = await User.findOne({ email: session.user.email });
  return new Response(JSON.stringify(user), { status: 200 });
}

export const PUT = async (req: Request) => {
  try {
    await connectToDatabase();

    const body = await req.json();
    const { fullname, username, email } = body;

    // Check if the username already exists (excluding the current user)
    const existingUser = await User.findOne({
      username,
      email: { $ne: email },
    });
    if (existingUser) {
      return NextResponse.json(
        { error: "Username is already taken" },
        { status: 409 }
      );
    }

    // update user in the database
    const updatedUser = await User.findOne(
      { email },
      { fullname, username },
      { new: true }
    );

    // if user is not found
    if (!updatedUser) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // respond with updated user
    return NextResponse.json(updatedUser, { status: 200 });
  } catch (error) {
    console.log("Error updating user: ", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
};
