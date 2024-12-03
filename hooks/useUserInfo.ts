import {
  getCurrentUserInfo,
  getUserByEmail,
  updateUserInfo,
} from "@/lib/actions/userAction";
import { IUser } from "@/lib/models/User";
import { QUERY_KEYS } from "@/lib/react-query/queryKeys";
import { TUpdatedUserInfo } from "@/types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useUserInfo = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.GET_USER_INFO],
    queryFn: getCurrentUserInfo,
  });
};

export const useUpdateUserInfo = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: TUpdatedUserInfo) => updateUserInfo(data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.GET_USER_INFO],
      });
    },
  });
};
export const useUserByEmail = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (email: string) => getUserByEmail({ email: email }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.GET_USER_BY_EMAIL],
      });
    },
  });
};
