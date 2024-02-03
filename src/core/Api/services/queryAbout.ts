import { httpClient } from "@src/core";

const queryProjects = {
  getAbout: () =>
    httpClient
      .get<string[] | undefined>("/about.json")
      .then((response) => response.data),
};

export default queryProjects;
