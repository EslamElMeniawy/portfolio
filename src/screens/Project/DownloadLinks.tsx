import { AppSvgImages } from "@src/constants";
import { openUrl } from "@src/utils";
import * as React from "react";
import { useTranslation } from "react-i18next";
import { View } from "react-native";
import { Text, IconButton } from "react-native-paper";
import { ms } from "react-native-size-matters";

import styles from "./styles";
import { ProjectProps } from "./types";

export default React.memo((props: ProjectProps) => {
  // #region Logger
  const getLogMessage = (message: string) =>
    `## Project::DownloadLinks:: ${message}`;
  // #endregion

  const { project } = props;

  const { t: translate } = useTranslation();

  const _onAndroidLinkPress = () => {
    console.info(getLogMessage("_onAndroidLinkPress"));
    openUrl(project?.androidLink);
  };

  const _onIosLinkPress = () => {
    console.info(getLogMessage("_onIosLinkPress"));
    openUrl(project?.iosLink);
  };

  return project && (project.androidLink || project.iosLink) ? (
    <View>
      <Text variant="labelMedium" style={styles.infoText}>
        {translate("download_links")}
      </Text>
      <View style={styles.downloadIconsContainer}>
        {project.androidLink ? (
          <IconButton
            mode="contained"
            size={ms(24)}
            icon={(iconProps) => (
              <AppSvgImages.android
                fill={iconProps.color}
                width={iconProps.size}
                height={iconProps.size}
              />
            )}
            onPress={_onAndroidLinkPress}
          />
        ) : null}
        {project.iosLink ? (
          <IconButton
            mode="contained"
            size={ms(24)}
            icon={(iconProps) => (
              <AppSvgImages.apple
                fill={iconProps.color}
                width={iconProps.size}
                height={iconProps.size}
              />
            )}
            onPress={_onIosLinkPress}
          />
        ) : null}
      </View>
    </View>
  ) : null;
});
