import { useNavigation } from "@react-navigation/native";
import { ScreenTitle } from "@src/components";
import * as React from "react";
import { useTranslation } from "react-i18next";
import { Appbar } from "react-native-paper";

import { ProjectProps } from "./types";

export default React.memo((props: ProjectProps) => {
  // #region Logger
  const getLogMessage = (message: string) => `## Project::Header:: ${message}`;
  // #endregion

  const { project } = props;

  const { t: translate } = useTranslation();
  const { goBack } = useNavigation();

  const onBackPress = () => {
    console.info(getLogMessage("onBackPress"), project);
    goBack();
  };

  return (
    <Appbar.Header statusBarHeight={0} mode="large">
      <Appbar.BackAction onPress={onBackPress} />
      <Appbar.Content
        title={
          <ScreenTitle title={project?.name ?? translate("project_details")} />
        }
      />
    </Appbar.Header>
  );
});
