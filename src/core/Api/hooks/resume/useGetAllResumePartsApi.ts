import { queryAbout, queryContact, queryResume } from "@src/core";
import type { Contact, Resume } from "@src/core";
import { useQueries } from "@tanstack/react-query";
import type { UseQueryOptions } from "@tanstack/react-query";

const useGetAllResumePartsApi = (
  optionsAbout?: Omit<
    UseQueryOptions<string[] | undefined>,
    "queryFn" | "queryKey"
  >,
  optionsContact?: Omit<
    UseQueryOptions<Contact | undefined>,
    "queryFn" | "queryKey"
  >,
  optionsResume?: Omit<
    UseQueryOptions<Resume | undefined>,
    "queryFn" | "queryKey"
  >,
) =>
  useQueries({
    queries: [
      {
        queryFn: () => queryAbout.getAbout(),
        queryKey: ["about"],
        ...(optionsAbout ?? {}),
      },
      {
        queryFn: () => queryContact.getContact(),
        queryKey: ["contact"],
        ...(optionsContact ?? {}),
      },
      {
        queryFn: () => queryResume.getResume(),
        queryKey: ["resume"],
        ...(optionsResume ?? {}),
      },
    ],
  });

export default useGetAllResumePartsApi;
