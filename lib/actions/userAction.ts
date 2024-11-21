import { TUpdatedUserInfo } from "@/types";
import { IUser } from "../models/User";

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
