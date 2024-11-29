import { Post, User } from "@/lib/models/User";
import { NextRequest, NextResponse } from "next/server";
import mongoose from "mongoose";

export const POST = async (req: NextRequest) => {
  try {
    const { postContent, email } = await req.json();

    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json(
        { error: "Unauthorized access denied!" },
        { status: 404 }
      );
    }

    // Create and save the new post
    const newPost = await Post.create({
      author: user._id,
      content: postContent,
    });

    // Explicitly cast newPost._id to Types.ObjectId
    await User.findByIdAndUpdate(user._id, { $push: { posts: newPost._id } });

    return NextResponse.json({ success: "Post was created" }, { status: 201 });
  } catch (error) {
    console.error("Error creating post: ", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
};
