import { Project } from "@src/core";

export interface ProjectProps {
  project?: Project;
}

export interface ImageProps extends ProjectProps {
  height?: number;
}
