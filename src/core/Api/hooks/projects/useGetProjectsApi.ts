import { queryProjects } from "@src/core";
import type { PagingResponse, Project, ApiRequest } from "@src/core";
import { useInfiniteQuery } from "@tanstack/react-query";
import type {
  InfiniteData,
  UseInfiniteQueryOptions,
  QueryKey,
} from "@tanstack/react-query";

const useGetProjectsApi = (
  options?: Omit<
    UseInfiniteQueryOptions<
      PagingResponse<Project>,
      any,
      InfiniteData<PagingResponse<Project>, ApiRequest>,
      any,
      QueryKey,
      ApiRequest
    >,
    "queryFn" | "queryKey" | "initialPageParam" | "getNextPageParam"
  >,
) =>
  useInfiniteQuery<
    PagingResponse<Project>,
    any,
    InfiniteData<PagingResponse<Project>, ApiRequest>,
    QueryKey,
    ApiRequest
  >({
    queryFn: ({ pageParam }) => queryProjects.getProjects(pageParam),
    queryKey: ["projects"],
    initialPageParam: {
      params: { page: 1, size: 10 },
    },
    getNextPageParam: (lastPage, _allPages, lastPageParam) =>
      lastPage.currentPage === lastPage.lastPage
        ? undefined
        : {
            params: {
              page: (lastPage.currentPage ?? 1) + 1,
              size: lastPageParam.params?.size,
            },
          },
    ...(options ?? {}),
  });

export default useGetProjectsApi;
