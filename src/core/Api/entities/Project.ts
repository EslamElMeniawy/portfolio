import Screenshot from "./Screenshot";

interface Project {
  id?: number;
  name?: string;
  image?: string;
  imageHash?: string;
  details?: string[];
  programmingLang?: string;
  androidLink?: string;
  iosLink?: string;
  screens?: Screenshot[];
}

export default Project;
