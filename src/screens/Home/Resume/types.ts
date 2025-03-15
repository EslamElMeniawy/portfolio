import type { Resume, Contact } from "@src/core";

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
