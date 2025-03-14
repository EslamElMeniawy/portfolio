import { useLinkBuilder, useLinkTo } from "@react-navigation/native";
import { NavigationParamsKeys } from "@src/navigation";
import * as React from "react";
import { useTranslation } from "react-i18next";
import { Card, Button } from "react-native-paper";

import ProjectItemContent from "./ProjectItemContent";
import ProjectItemCover from "./ProjectItemCover";
import styles from "./styles";
import type { ProjectItemProps } from "./types";

export default React.memo((props: ProjectItemProps) => {
  // #region Logger
  const getLogMessage = (message: string) =>
    `## Portfolio::ProjectItem:: ${message}`;
  // #endregion

  const { item: project } = props;

  const { t: translate } = useTranslation();
  const { buildHref } = useLinkBuilder();
  const linkTo = useLinkTo();

  const _onProjectPress = () => {
    console.info(getLogMessage("_onProjectPress"), project);

    const href = buildHref("Project", {
      [NavigationParamsKeys.PROJECT]: project.id,
    });

    if (href) {
      linkTo(href);
    }
  };

  return (
    <Card onPress={_onProjectPress} style={styles.projectCard}>
      <ProjectItemCover {...props} />
      <ProjectItemContent {...props} />
      <Card.Actions>
        <Button labelStyle={styles.detailsButtonText} onPress={_onProjectPress}>
          {translate("details")}
        </Button>
      </Card.Actions>
    </Card>
  );
});
