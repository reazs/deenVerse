"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { usePosts } from "@/hooks/usePost";
import { Heart, MessageCircle, Share } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Loading from "@/components/shared/Loading";
import ErrorMessage from "@/components/shared/ErrorMessage";
import { ScrollArea } from "@/components/ui/scroll-area";
import CreatePost from "@/components/shared/createPost";

const RecommendedSection = ({ title, items }) => (
  <Card className="mb-6">
    <CardContent className="p-4">
      <h2 className="font-semibold mb-4">{title}</h2>
      {items.map((item, index) => (
        <div key={index} className="flex items-center justify-between mb-2">
          <div className="flex items-center">
            <Avatar className="h-8 w-8 mr-2">
              <AvatarImage src={item.image} alt={item.name} />
              <AvatarFallback>{item.name[0]}</AvatarFallback>
            </Avatar>
            <span>{item.name}</span>
          </div>
          <Button variant="outline" size="sm">
            Follow
          </Button>
        </div>
      ))}
    </CardContent>
  </Card>
);

const HomePage = () => {
  const { data: posts, isPending: isLoadingPosts, error } = usePosts();

  const recommendedUsers = [
    { name: "Jane Doe", image: "/placeholder.svg" },
    { name: "John Smith", image: "/placeholder.svg" },
    { name: "Alice Johnson", image: "/placeholder.svg" },
  ];

  const recommendedCommunities = [
    { name: "Islamic History", image: "/placeholder.svg" },
    { name: "Quran Study", image: "/placeholder.svg" },
    { name: "Hadith Discussion", image: "/placeholder.svg" },
  ];

  return (
    <div className="flex flex-col md:flex-row min-h-screen ">
      {/* Main Content */}
      <main className="flex-1 p-4 md:order-1">
        <ScrollArea className="h-[calc(100vh-2rem)]">
          <div className="px-4">
            <CreatePost />
            {isLoadingPosts ? (
              <div className="flex h-full w-full justify-center items-center py-10">
                <Loading />
              </div>
            ) : error ? (
              <ErrorMessage>Error loading posts: {error.message}</ErrorMessage>
            ) : !posts || posts.length === 0 ? (
              <div className="text-center py-4">No posts found.</div>
            ) : (
              <div className="space-y-6">
                {posts.map((post) => (
                  <Card key={post._id}>
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4 mb-4">
                        <Avatar>
                          <AvatarImage
                            src={post.author.image}
                            alt={post.author.fullname}
                          />
                          <AvatarFallback>
                            {post.author.fullname[0]}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold">
                            {post.author.fullname}
                          </p>
                          <p className="text-sm text-gray-500">
                            @{post.author.username}
                            {post.isEdited && " (edited)"}
                          </p>
                        </div>
                      </div>
                      <p className="mb-4">{post.content}</p>
                      <div className="flex items-center space-x-4 mb-4">
                        <Button variant="ghost" size="sm">
                          <Heart className="mr-2 h-4 w-4" /> {post.likes} Likes
                        </Button>
                        <Button variant="ghost" size="sm">
                          <MessageCircle className="mr-2 h-4 w-4" />{" "}
                          {post.comments.length} Comments
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Share className="mr-2 h-4 w-4" /> Share
                        </Button>
                      </div>
                      {post.comments.length > 0 && (
                        <div className="space-y-2 mb-4">
                          {post.comments.slice(0, 3).map((comment) => (
                            <div
                              key={comment._id}
                              className="bg-gray-100 p-2 rounded"
                            >
                              <span className="font-semibold">
                                {comment.user.fullname}:{" "}
                              </span>
                              {comment.content}
                            </div>
                          ))}
                          {post.comments.length > 3 && (
                            <Button variant="link" size="sm">
                              View all {post.comments.length} comments
                            </Button>
                          )}
                        </div>
                      )}
                      <div className="mt-4">
                        <Input
                          placeholder="Add a comment..."
                          className="mb-2"
                        />
                        <Button size="sm">Post Comment</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </ScrollArea>
      </main>

      {/* Right Sidebar */}
      <aside className="w-full md:w-64 p-4 bg-white md:order-2">
        <ScrollArea className="h-[calc(100vh-2rem)]">
          <RecommendedSection
            title="Recommended Users"
            items={recommendedUsers}
          />
          <RecommendedSection
            title="Recommended Communities"
            items={recommendedCommunities}
          />
        </ScrollArea>
      </aside>
    </div>
  );
};

export default HomePage;
