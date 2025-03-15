import { Contact } from "@src/core";

export interface Props {
  data?: Contact;
}

export interface ButtonProps {
  icon?: React.JSX.Element;
  text?: string;
  onPress?: () => void;
}
