import { Project } from "@src/core";

export interface ProjectProps {
  project?: Project;
}

export interface ContentProps extends ProjectProps {
  isLoading: boolean;
}

export interface ImageProps extends ProjectProps {
  height?: number;
}
