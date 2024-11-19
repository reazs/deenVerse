"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
import { signOut, useSession } from "next-auth/react";
import ProfilePageSkeleton from "./profilePageSkeleton";

const UserStats = () => {
  const route = useRouter();
  const { data: session, status } = useSession();
  if (status == "unauthenticated") {
    route.push("/login");
    return null;
  }
  const userStats = {
    posts: 42,
    followers: 1234,
    following: 567,
    communities: 8,
  };

  if (status === "loading") {
    return <ProfilePageSkeleton />;
  }
  const handleSignOut = async () => {
    await signOut({ callbackUrl: "/login" });
  };

  return (
    <div className="mb-8">
      <div className="pt-6 flex flex-col md:flex-row items-center md:items-start">
        <Avatar className="w-24 h-24 md:w-40 md:h-40 mb-4 md:mb-0 md:mr-8">
          <AvatarImage
            src={
              session?.user?.image || "/placeholder.svg?height=160&width=160"
            }
            alt={session?.user?.fullname}
          />
          <AvatarFallback className="text-4xl">
            {session?.user?.fullname?.charAt(0) +
              session?.user?.fullname?.split(" ")[1].charAt(0)}
          </AvatarFallback>
        </Avatar>
        <div className="text-center md:text-left">
          <h1 className="text-2xl font-bold mb-2">{session?.user?.fullname}</h1>
          <p className="text-gray-600 mb-4">
            @{session?.user?.username || session?.user?.email.split("@")[0]}
          </p>
          <div className="flex justify-center md:justify-start space-x-4 mb-4">
            <div>
              <span className="font-bold">{userStats.posts}</span> posts
            </div>
            <div>
              <span className="font-bold">{userStats.followers}</span> followers
            </div>
            <div>
              <span className="font-bold">{userStats.following}</span> following
            </div>
          </div>
          <div className="mb-4">
            <Badge variant="secondary">
              {userStats.communities} Communities
            </Badge>
          </div>
          <div className="flex space-x-2">
            <Button>Edit Profile</Button>
            <Button variant="outline" onClick={handleSignOut}>
              <LogOut className="mr-2 h-4 w-4" /> Sign Out
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserStats;
