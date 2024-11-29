import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import { IUser, User } from "@/lib/models/User";
import connectToDatabase from "@/lib/mongodb";
import { NextResponse } from "next/server";
import { error } from "console";

export async function GET(req: Request) {
  await connectToDatabase();

  const session = await getServerSession(authOptions);
  if (!session?.user) {
    return new Response("Unauthorized", { status: 401 });
  }
  const user = await User.findOne({ email: session.user.email });
  return new Response(JSON.stringify(user), { status: 200 });
}

export const PUT = async (req: Request) => {
  try {
    // Connect to the database
    await connectToDatabase();

    // Parse the request body
    const body = await req.json();
    const { fullname, username, email } = body;

    // Validate required fields
    if (!email || !username || !fullname) {
      return NextResponse.json(
        { error: "All fields (fullname, username, email) are required" },
        { status: 400 }
      );
    }

    // Check if the username already exists (excluding the current user)
    const existingUser = await User.findOne({
      username,
      email: { $ne: email }, // Exclude the current user by email
    });

    if (existingUser) {
      return NextResponse.json(
        { error: "Username is already taken" },
        { status: 409 }
      );
    }

    // Update user in the database
    const updatedUser = await User.findOneAndUpdate(
      { email }, // Find the user by email
      { fullname, username }, // Fields to update
      { new: true } // Return the updated document
    );

    // If the user is not found
    if (!updatedUser) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Respond with the updated user
    return NextResponse.json(updatedUser, { status: 200 });
  } catch (error) {
    console.error("Error updating user: ", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
};
