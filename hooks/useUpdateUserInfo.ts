import {
  useMutation,
  useQueryClient,
  UseMutationResult,
} from "@tanstack/react-query";
import axios from "axios";

type UserInfo = {
  fullname: string;
  email?: string;
  username?: string;
};

// Function to update user info on the server
const updateUserInfo = async (userData: UserInfo): Promise<UserInfo> => {
  const response = await axios.put("/api/user", userData);
  return response.data;
};

// Custom hook using React Query's useMutation
export const useUpdateUserInfo = (): UseMutationResult<
  UserInfo,
  Error,
  UserInfo,
  unknown
> => {
  const queryClient = useQueryClient();

  return useMutation<UserInfo, Error, UserInfo, unknown>({
    mutationFn: updateUserInfo,
    onSuccess: () => {
      // Invalidate the query to refresh user data
        queryClient.invalidateQueries({
            queryKey: []
        });
    },
  });
};
