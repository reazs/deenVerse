import React, { ChangeEvent, useState } from "react";
import { Textarea } from "../ui/textarea";
import { PlusCircle, Target } from "lucide-react";
import { useUserInfo } from "@/hooks/useUserInfo";
import { useCreatePost } from "@/hooks/usePost";

const CreatePost = () => {
  const [postContent, setPostContent] = useState("");
  const { data: user, isPending: isUserLoading } = useUserInfo();
  const { mutateAsync: createPost, isPending: isCreatingPost } =
    useCreatePost();
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setPostContent(e.target.value);
  };
  if (!user) {
    return null;
  }
  const handleCreatePost = async () => {
    createPost({
      email: user.email,
      postContent: postContent,
    });
    setPostContent("");
  };
  return (
    <div className="mb-8">
      <div className="pt-6">
        <Textarea
          value={postContent}
          disabled={isCreatingPost}
          onChange={(e) => handleChange(e)}
          placeholder="Share your thoughts or reflections..."
          className="mb-4 min-h-[100px]"
        />
        <div className="flex justify-end">
          <button
            disabled={isCreatingPost}
            onClick={handleCreatePost}
            className="btn btn-outline"
          >
            <PlusCircle className="mr-2 h-4 w-4" /> Create Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
