import { queryContact } from "@src/core";
import type { Contact } from "@src/core";
import { useQuery } from "@tanstack/react-query";
import type { UseQueryOptions } from "@tanstack/react-query";

const useGetContactApi = (
  options?: Omit<UseQueryOptions<Contact | undefined>, "queryFn" | "queryKey">,
) =>
  useQuery<Contact | undefined>({
    queryFn: () => queryContact.getContact(),
    queryKey: ["contact"],
    ...(options ?? {}),
  });

export default useGetContactApi;
