export interface createPostActionProp {
  postContent: string;
  email: string;
}
export const createPostAction = async ({
  email,
  postContent,
}: createPostActionProp) => {
  try {
    const res = await fetch("/api/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ postContent: postContent, email: email }),
    });

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Post action failed to create post: ", error);
  }
};

export const getPostsAction = async () => {
  try {
    const res = await fetch("/api/post", {
      method: "GET",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch posts");
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Post action failed to get post: ", error);
  }
};
