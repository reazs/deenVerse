import { getCurrentUserInfo, updateUserInfo } from "@/lib/actions/userAction";
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
