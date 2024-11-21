"use client";

import { useState } from "react";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Home, MessageCircle } from "lucide-react";
import Link from "next/link";
import LogoBrand from "@/components/shared/logoBrand";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import UserStats from "../_components/userStats";
import CreatePost from "@/components/shared/createPost";
import PostsTab from "./postsTab";
import HadithsTab from "./hadithsTab";

export default function ProfilePage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("posts");

  const userStats = {
    posts: 42,
    followers: 1234,
    following: 567,
    communities: 8,
  };

  const userContent = {
    posts: [
      {
        id: 1,
        content: "Alhamdulillah for another beautiful day!",
        likes: 15,
        comments: [
          { id: 1, user: "Fatima", content: "MashaAllah, indeed!" },
          { id: 2, user: "Ahmed", content: "May Allah bless us all." },
          { id: 3, user: "Zainab", content: "Ameen to that!" },
          { id: 4, user: "Ahmed", content: "May Allah bless us all." },
          { id: 5, user: "Zainab", content: "Ameen to that!" },
        ],
      },
      {
        id: 2,
        content:
          "Just finished reading Surah Al-Kahf. So many lessons to reflect upon.",
        likes: 28,
        comments: [
          { id: 1, user: "Omar", content: "It's such a beautiful surah." },
          { id: 2, user: "Aisha", content: "What was your favorite ayah?" },
        ],
      },
    ],
    hadiths: [
      {
        id: 1,
        content: "The best of you are those who are best to their families",
      },
      { id: 2, content: "Seeking knowledge is obligatory upon every Muslim" },
    ],
  };
  return (
    <div className="min-h-screen bg-gradient-to-b ">
      {/* Navbar */}
      {/* <nav className="bg-white shadow-md p-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <LogoBrand />
          <input
            type="search"
            placeholder="Search DeenVerse..."
            className="px-4 py-2 border rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>
        <div className="flex items-center space-x-4">
          <Link href="/home">
            <Home className="h-6 w-6 text-gray-600 hover:text-emerald-600" />
          </Link>
          <Link href="/messages">
            <MessageCircle className="h-6 w-6 text-gray-600 hover:text-emerald-600" />
          </Link>
          <Avatar>
            <AvatarImage
              src={
                session?.user?.image || "/placeholder.svg?height=32&width=32"
              }
              alt={
                session?.user?.fullname?.charAt(0) +
                session?.user?.fullname?.split(" ")[1].charAt(0)
              }
            />
            <AvatarFallback>
              {session?.user?.fullname?.charAt(0) +
                session?.user?.fullname?.split(" ")[1].charAt(0)}
            </AvatarFallback>
          </Avatar>
        </div>
      </nav> */}

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <UserStats />
        <Separator />
        <CreatePost />
        <Tabs defaultValue="posts" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="posts">Posts</TabsTrigger>
            <TabsTrigger value="hadiths">Favorite Hadiths</TabsTrigger>
          </TabsList>
          <TabsContent value="posts">
            <PostsTab />
          </TabsContent>
          <TabsContent value="hadiths">
            <HadithsTab />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
