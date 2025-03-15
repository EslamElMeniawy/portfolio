import { queryResume } from "@src/core";
import type { Resume } from "@src/core";
import { useQuery } from "@tanstack/react-query";
import type { UseQueryOptions } from "@tanstack/react-query";

const useGetResumeApi = (
  options?: Omit<UseQueryOptions<Resume | undefined>, "queryFn" | "queryKey">,
) =>
  useQuery<Resume | undefined>({
    queryFn: () => queryResume.getResume(),
    queryKey: ["resume"],
    ...(options ?? {}),
  });

export default useGetResumeApi;
