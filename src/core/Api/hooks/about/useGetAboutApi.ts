import { queryAbout } from "@src/core";
import { useQuery } from "@tanstack/react-query";
import type { UseQueryOptions } from "@tanstack/react-query";

const useGetAboutApi = (
  options?: Omit<UseQueryOptions<string[] | undefined>, "queryFn" | "queryKey">,
) =>
  useQuery<string[] | undefined>({
    queryFn: () => queryAbout.getAbout(),
    queryKey: ["about"],
    ...(options ?? {}),
  });

export default useGetAboutApi;
