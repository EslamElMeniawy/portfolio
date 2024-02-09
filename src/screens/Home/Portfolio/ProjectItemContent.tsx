import * as React from "react";
import { Card, Text } from "react-native-paper";

import styles from "./styles";
import type { ProjectItemProps } from "./types";

export default React.memo((props: ProjectItemProps) => {
  const { item: project } = props;

  return (
    <Card.Content>
      <Text
        variant="titleLarge"
        style={styles.projectTitle}
        numberOfLines={1}
        ellipsizeMode="tail"
      >
        {project.name}
      </Text>
      <Text
        variant="bodyMedium"
        style={styles.projectDetails}
        numberOfLines={2}
        ellipsizeMode="tail"
      >
        {project.details?.join("\n")}
      </Text>
    </Card.Content>
  );
});
