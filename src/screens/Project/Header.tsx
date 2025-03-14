import { useLinkBuilder, useLinkTo } from "@react-navigation/native";
import { ScreenTitle } from "@src/components";
import * as React from "react";
import { useTranslation } from "react-i18next";
import { Platform } from "react-native";
import { Appbar } from "react-native-paper";
import { ms } from "react-native-size-matters";

import { ProjectProps } from "./types";

export default React.memo((props: ProjectProps) => {
  // #region Logger
  const getLogMessage = (message: string) => `## Project::Header:: ${message}`;
  // #endregion

  const { project } = props;

  const { t: translate } = useTranslation();
  const { buildHref } = useLinkBuilder();
  const linkTo = useLinkTo();

  const _onBackPress = () => {
    console.info(getLogMessage("_onBackPress"), project);

    const href = buildHref("Home", { screen: "Portfolio" });

    if (href) {
      linkTo(href);
    }
  };

  return (
    <Appbar.Header
      statusBarHeight={0}
      mode={Platform.OS === "web" ? "large" : "medium"}
    >
      <Appbar.BackAction size={ms(24)} onPress={_onBackPress} />
      <Appbar.Content
        style={{ padding: Platform.OS === "web" ? 0 : undefined }}
        title={
          <ScreenTitle title={project?.name ?? translate("project_details")} />
        }
      />
    </Appbar.Header>
  );
});
