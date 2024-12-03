import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { MessageSquare } from "lucide-react";
import { Button } from "../ui/button";

function Post({ post }: { post: Post }) {
  return (
    <div className="">
      <div className="flex items-center space-x-4 mb-4">
        <HoverCard>
          <HoverCardTrigger asChild>
            <Avatar>
              <AvatarImage src={post.author.image} alt={post.author.fullname} />
              <AvatarFallback>
                {post.author.fullname[0]}
                {post.author.fullname.split(" ")[1][0]}
              </AvatarFallback>
            </Avatar>
          </HoverCardTrigger>
          <HoverCardContent className="w-80 z-50" sideOffset={5}>
            <div className="flex">
              <Avatar>
                <AvatarImage
                  src={post.author.image}
                  alt={post.author.fullname}
                />
                <AvatarFallback>
                  {post.author.fullname[0]}
                  {post.author.fullname.split(" ")[1][0]}
                </AvatarFallback>
              </Avatar>
              <div className="pl-2">
                <p className="font-semibold">{post.author.fullname}</p>
                <p className="text-sm text-gray-500">@{post.author.username}</p>
                <div className="flex space-x-1">
                  <Button className="">follow</Button>
                  <Button variant={"outline"}>
                    <MessageSquare />
                  </Button>
                </div>
              </div>{" "}
            </div>
          </HoverCardContent>
        </HoverCard>
        <div>
          <p className="font-semibold">{post.author.fullname}</p>
          <p className="text-sm text-gray-500">
            @{post.author.username}
            {post.isEdited && " (edited)"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Post;

interface Post {
  author: {
    fullname: string;
    username: string;
    image: string;
  };
  content: string;
  isEdited: boolean;
}
