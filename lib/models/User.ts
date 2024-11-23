import mongoose, { Schema, model, Model, Document } from "mongoose";

// Define the TypeScript interface for the User model
export interface IUser extends Document {
  fullname: string;
  username: string;
  email: string;
  password: string;
  image?: string;
}

// Define the Mongoose schema for the User model
const UserSchema: Schema<IUser> = new Schema({
  fullname: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  image: { type: String, default: "" },
});

// Check if the User model already exists, otherwise define it
const User: Model<IUser> =
  mongoose.models.User || model<IUser>("User", UserSchema);
  
export default User;
