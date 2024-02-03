import * as React from "react";
import { Card } from "react-native-paper";

import GithubButton from "./GithubButton";
import LinkedinButton from "./LinkedinButton";
import MailButton from "./MailButton";
import MobileButton from "./MobileButton";
import styles from "./styles";
import { ContactInfoProps } from "./types";

export default React.memo((props: ContactInfoProps) => {
  const { data } = props;

  return data ? (
    <Card.Content style={styles.cardContent}>
      <MailButton data={data} />
      <MobileButton data={data} />
      <GithubButton data={data} />
      <LinkedinButton data={data} />
    </Card.Content>
  ) : null;
});
