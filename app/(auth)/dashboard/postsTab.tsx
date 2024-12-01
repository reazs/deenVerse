import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { usePosts } from "@/hooks/usePost";
import { Heart, MessageCircle, Share } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Loading from "@/components/shared/Loading";
import ErrorMessage from "@/components/shared/ErrorMessage";
import { useUserInfo } from "@/hooks/useUserInfo";
import { redirect } from "next/navigation";
// import { formatDistanceToNow } from "date-fns";

const PostsTab = () => {
  const { data: posts, isPending: isLoadingPosts, error } = usePosts();
  const { data: user, isPending: isUserLoading } = useUserInfo();
  if (isLoadingPosts || isUserLoading) {
    return (
      <div className="flex h-full w-full justify-center items-center py-10">
        <Loading />
      </div>
    );
  }

  if (error) {
    return <ErrorMessage>Error loading posts: {error.message}</ErrorMessage>;
  }

  if (!posts || posts.length === 0) {
    return <div className="text-center py-4">No posts found.</div>;
  }
  if (!user) {
    return redirect("/login");
  }
  const fileredPost = posts.filter((post) => post.author.email === user.email);

  return (
    <div className="space-y-6">
      {fileredPost.map((post) => (
        <Card key={post._id}>
          <CardContent className="p-6">
            <div className="flex items-center space-x-4 mb-4">
              <Avatar>
                <AvatarImage
                  src={post.author.image}
                  alt={post.author.fullname}
                />
                <AvatarFallback>{post.author.fullname[0]}</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold">{post.author.fullname}</p>
                <p className="text-sm text-gray-500">
                  {/* {formatDistanceToNow(new Date(post.createdAt), {
                    addSuffix: true,
                  })} */}
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
                  <div key={comment._id} className="bg-gray-100 p-2 rounded">
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
