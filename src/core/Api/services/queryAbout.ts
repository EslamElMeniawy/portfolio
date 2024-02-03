import { httpClient } from "@src/core";

const queryAbout = {
  getAbout: () =>
    httpClient
      .get<string[] | undefined>("/about.json")
      .then((response) => response.data),
};

export default queryAbout;
