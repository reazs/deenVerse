import { QUERY_KEYS } from "@/lib/react-query/queryKeys";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

// const fetchUserInfo = async () => {
//   const response = await axios.get("/api/user");
//   return response.data;
// };

// export const useUserInfo = () => {
//   return useQuery({
//     queryKey: [QUERY_KEYS.GET_USER_INFO],
//     queryFn: fetchUserInfo,
//   });
// };
