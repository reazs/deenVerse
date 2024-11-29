import React, { ChangeEvent, useState } from "react";
import { Textarea } from "../ui/textarea";
import { PlusCircle, Target } from "lucide-react";
import { useUserInfo } from "@/hooks/useUserInfo";

const CreatePost = () => {
  const [postContent, setPostContent] = useState("");
  const { data: user, isPending: isUserLoading } = useUserInfo();
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setPostContent(e.target.value);
  };
  if (!user) {
    return null;
  }
  const handleCreatePost = async () => {
    const res = await fetch("/api/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        postContent: postContent,
        email: user.email,
      }),
    });
  };
  return (
    <div className="mb-8">
      <div className="pt-6">
        <Textarea
          onChange={(e) => handleChange(e)}
          placeholder="Share your thoughts or reflections..."
          className="mb-4 min-h-[100px]"
        />
        <div className="flex justify-end">
          <button onClick={handleCreatePost} className="btn btn-outline">
            <PlusCircle className="mr-2 h-4 w-4" /> Create Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
