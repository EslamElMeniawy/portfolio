import * as React from "react";
import { useTranslation } from "react-i18next";
import { Card, Text } from "react-native-paper";

import styles from "./styles";
import { ProjectProps } from "./types";

export default React.memo((props: ProjectProps) => {
  const { project } = props;

  const { t: translate } = useTranslation();

  return project && project?.screens && project?.screens?.length ? (
    <Card style={styles.card}>
      <Card.Content style={styles.cardContent}>
        <Text variant="titleLarge" style={styles.cardTitle}>
          {translate("screenshots")}
        </Text>
        {/* TODO: Display screenshots */}
      </Card.Content>
    </Card>
  ) : null;
});
