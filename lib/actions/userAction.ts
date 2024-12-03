import { TUpdatedUserInfo } from "@/types";
import { IUser, User } from "../models/User";
import connectDB from "../mongodb";
import Email from "next-auth/providers/email";
import { use } from "react";

export const getCurrentUserInfo = async () => {
  try {
    const res = await fetch("/api/user", { method: "GET" });
    if (res.status === 200) {
      const data = await res.json();
      return data as IUser;
    } else {
      return null;
    }
  } catch (error) {
    console.log("userAction failed to get user info", error);
  }
};

export const updateUserInfo = async (data: TUpdatedUserInfo) => {
  try {
    const res = await fetch("/api/user", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  } catch (error) {
    console.log("userAction failed to update user ifno: ", error);
  }
};

export const getUserByEmail = async ({ email }: {email:string}): Promise<IUser | null> => {
  try {
    const res = await fetch("/api/user/by-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email }),
    });
    if (!res) {
      return null;
    }
    if (res.status === 200) {
      const userData = await res.json();
      return userData as IUser;
    }

    return null;
  } catch (error) {
    console.error("error getting user by email: ", error);
    return null;
  }
};
