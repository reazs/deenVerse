import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Heart, MessageCircle } from "lucide-react";
import React from "react";

const PostsTab = () => {
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
    <div className="space-y-6">
      {userContent.posts.map((post) => (
        <Card key={post.id}>
          <CardContent className="p-6">
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
                Share
              </Button>
            </div>
            <div className="space-y-2">
              {post.comments.slice(0, 3).map((comment) => (
                <div key={comment.id} className="bg-gray-100 p-2 rounded">
                  <span className="font-semibold">{comment.user}: </span>
                  {comment.content}
                </div>
              ))}
              {post.comments.length > 3 && (
                <Button variant="link" size="sm">
                  View all comments
                </Button>
              )}
            </div>
            <div className="mt-4">
              <Input placeholder="Add a comment..." className="mb-2" />
              <Button size="sm">Post Comment</Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default PostsTab;
