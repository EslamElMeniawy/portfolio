import type { ApiRequest, PagingResponse, Project } from "@src/core";
import { httpClient } from "@src/core";

const queryProjects = {
  getProjects: (request: ApiRequest): Promise<PagingResponse<Project>> =>
    httpClient
      .get<Project[] | undefined>("/projects.json", {
        params: request.params,
      })
      .then((response) => ({
        data: response.data,
        currentPage: 1,
        lastPage: 1,
      })),
};

export default queryProjects;
