import mongoose, { Schema, model, Model, Document, Types } from "mongoose";

// Define the TypeScript interface for the User model
export interface IUser extends Document {
  fullname: string;
  username: string;
  email: string;
  password: string;
  image?: string;
  bookmarkedHadiths: Array<{
    hadith_id: number;
    chapter_id: number;
  }>;
  posts: Types.ObjectId[];
}

// Define the interface for a Post
export interface IPost extends Document {
  author: Types.ObjectId;
  content: string;
  likes: number;
  comments: Array<{
    user: Types.ObjectId;
    content: string;
    createdAt: Date;
    isEdited: boolean;
  }>;
  createdAt: Date;
  updatedAt: Date;
  isEdited: boolean;
}

// Define the Mongoose schema for the User model
const UserSchema: Schema<IUser> = new Schema({
  fullname: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  image: { type: String, default: "" },
  bookmarkedHadiths: [
    {
      hadith_id: { type: Number, required: true },
      chapter_id: { type: Number, required: true },
    },
  ],
  posts: [{ type: Schema.Types.ObjectId, ref: "Post" }],
});

// Define the Mongoose schema for the Post model
const PostSchema: Schema<IPost> = new Schema({
  author: { type: Schema.Types.ObjectId, ref: "User", required: true },
  content: { type: String, required: true },
  likes: { type: Number, default: 0 },
  comments: [
    {
      user: { type: Schema.Types.ObjectId, ref: "User", required: true },
      content: { type: String, required: true },
      createdAt: { type: Date, default: Date.now },
    },
  ],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  isEdited: { type: Boolean, default: false },
});

// Check if the User model already exists, otherwise define it
const User: Model<IUser> =
  mongoose.models.User || model<IUser>("User", UserSchema);

// Check if the Post model already exists, otherwise define it
const Post: Model<IPost> =
  mongoose.models.Post || model<IPost>("Post", PostSchema);

export { User, Post };
