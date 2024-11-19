import mongoose, { Document, Model, Schema } from "mongoose";

export interface IUser extends Document {
  fullname: string;
  username: string;
  email: string;
  password: string;
}

const UserSchema = new mongoose.Schema({
  fullname: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User: Model<IUser> =
  mongoose.models.User || mongoose.model<IUser>("User", UserSchema);

export default User;
