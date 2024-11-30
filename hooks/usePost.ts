import {
  createPostAction,
  createPostActionProp,
  getPostsAction,
} from "@/lib/actions/postAction";
import { IPost } from "@/lib/models/User";
import { QUERY_KEYS } from "@/lib/react-query/queryKeys";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useCreatePost = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: createPostActionProp) => createPostAction(data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.GET_USER_INFO],
      });

      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.GET_POSTS],
      });
    },
  });
};

export const usePosts = () => {
  return useQuery<IPost[], Error>({
    queryKey: [QUERY_KEYS.GET_POSTS],
    queryFn: getPostsAction,
  });
};
