import type {
  Resume,
  Contact,
  WorkExperience,
  Education,
  Language,
} from "@src/core";

export interface TopSectionProps {
  data?: Resume;
}

export interface LeftSectionProps {
  flex?: number;
  aboutData?: string[];
  contactData?: Contact;
}

export interface RightSectionProps {
  flex?: number;
  data?: Resume;
}

export interface PlaceDateRowProps {
  place?: string;
  date?: string;
}

export interface WorkExperienceProps {
  data?: WorkExperience[];
}

export interface WorkExperienceItemProps {
  data?: WorkExperience;
}

export interface EducationProps {
  data?: Education[];
}

export interface EducationItemProps {
  data?: Education;
}

export interface SkillsProps {
  data?: string[];
}

export interface LanguageProps {
  data?: Language[];
}
