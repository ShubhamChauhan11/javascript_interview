// usersQueryOptions.ts
import { queryOptions, type UseQueryOptions } from "@tanstack/react-query";
import { getUsers } from "../api";
import type { GetUsersResponse, GetUsersOptions } from "../types";

export default function createUsersQueryOptions<
  TData = GetUsersResponse,
  TError = Error
>(
  params?: GetUsersOptions,
  options?: Omit<
    UseQueryOptions<GetUsersResponse, TError, TData>,
    "queryKey" | "queryFn"
  >
) {
  return queryOptions({
    ...options,
    queryKey: ["users", params],
    queryFn: () => getUsers(params),
  });
}

export async function getUsers(params?: { limit?: number }) {
  const search = new URLSearchParams(params as any).toString();
  const res = await fetch(`https://jsonplaceholder.typicode.com/users?${search}`);
  if (!res.ok) throw new Error("Failed to fetch users");
  return res.json();
}


//use
 const options = createUsersQueryOptions({ limit: 5 });
  const options2 = createUsersQueryOptions({ limit: 5 }, {enabled:true});

  const { data, isLoading, error } = useQuery(options);
 