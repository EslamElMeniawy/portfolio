import type {ApiRequest, PagingResponse, Project} from '@src/core';
import {httpClient} from '@src/core';

const queryProjects = {
  // TODO: Change params, endpoint, method, and response mapping based on API requirements.
  getProjects: (request: ApiRequest): Promise<PagingResponse<Project>> =>
    httpClient
      .get<Project[] | undefined>('/projects.json', {
        params: request.params,
      })
      .then(response => ({
        data: response.data?.map(project => ({
          ...project,
          key: `project_${project.id || 0}`,
        })),
      })),
};

export default queryProjects;
