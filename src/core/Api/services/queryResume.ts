import { httpClient } from "@src/core";
import type { Resume } from "@src/core";

const queryResume = {
  getResume: () =>
    httpClient
      .get<Resume | undefined>("/resume.json")
      .then((response) => response.data),
};

export default queryResume;
