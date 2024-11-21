import mongoose, { Schema, Document, model, Model } from "mongoose";

// interface for Post
interface IPost {
  content: string;
  likes: number;
  createdAt: Date;
  updatedAt?: Date;
}

// Interface for Bookmarked Hadith
interface IBookmarkedHadith {
  hadithId: number;
  bookId: number;
  chapter_id: number;
  bookmarkedAt: Date;
}

// Interface for user profile

export interface IUserProfile extends Document {
  user: mongoose.Types.ObjectId;
  posts: IPost[];
  boookmarkedHadithss: IBookmarkedHadith[];
  followers: mongoose.Types.ObjectId[];
  following: mongoose.Types.ObjectId[];
  likesReceived: number;
}

// Define Post Schema
const PostSchema = new Schema<IPost>(
  {
    content: { type: String, required: true },
    likes: { type: Number, default: 0 },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date },
  },
  { _id: false } // Prevent automatic creation of `_id` for embedded documents
);

// Define Bookmarked Hadith Schema
// const BookmarkedHadithSchema = new Schema<IBookmarkedHadith>(
//   {
//     hadithId: { type: mongoose.Schema.Types.ObjectId, ref: "Hadith", required: true },
//     bookmarkedAt: { type: Date, default: Date.now },
//   },
//   { _id: false } // Prevent automatic creation of `_id` for embedded documents
// );

// Define UserProfile Schema
// const UserProfileSchema = new Schema<IUserProfile>(
//   {
//     user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
//     posts: [PostSchema], // Array of posts created by the user
//     bookmarkedHadiths: [BookmarkedHadithSchema], // Array of bookmarked Hadiths
//     followers: [{ type: mongoose.Schema.Types.ObjectId, ref: "UserProfile" }], // Users who follow this user
//     following: [{ type: mongoose.Schema.Types.ObjectId, ref: "UserProfile" }], // Users this user follows
//     likesReceived: { type: Number, default: 0 }, // Total likes received
//   },
//   {
//     timestamps: true, // Automatically add `createdAt` and `updatedAt` fields
//   }
// );

// Check if the UserProfile model already exists, otherwise define it
const UserProfile: Model<IUserProfile> =
  mongoose.models.UserProfile || model<IUserProfile>("UserProfile", UserProfileSchema);

export default UserProfile;