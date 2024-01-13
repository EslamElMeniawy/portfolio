import Education from "./Education";
import Language from "./Language";
import WorkExperience from "./WorkExperience";

interface Resume {
  name?: string;
  profession?: string;
  workExperience?: WorkExperience[];
  education?: Education[];
  skills?: string[];
  languages?: Language[];
}

export default Resume;
