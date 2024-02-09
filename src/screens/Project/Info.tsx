import * as React from "react";
import { useTranslation } from "react-i18next";
import { StyleSheet, View } from "react-native";
import type { LayoutChangeEvent } from "react-native";
import { Card, Text } from "react-native-paper";

import DownloadLinks from "./DownloadLinks";
import Image from "./Image";
import styles from "./styles";
import { ProjectProps } from "./types";

export default React.memo((props: ProjectProps) => {
  const { project } = props;

  const { t: translate } = useTranslation();

  const [height, setHeight] = React.useState<number>();

  return project ? (
    <Card style={StyleSheet.flatten([styles.card, styles.infoCard])}>
      <View style={styles.infoCardContent}>
        <Image {...props} height={height} />
        <View
          onLayout={(event: LayoutChangeEvent) =>
            setHeight(event.nativeEvent.layout.height)
          }
          style={styles.infoCardTextContainer}
        >
          {project.programmingLang ? (
            <Text variant="labelMedium" style={styles.infoText}>
              {`${translate("developed_using")}: `}
              <Text variant="bodySmall" style={styles.infoText}>
                {project.programmingLang}
              </Text>
            </Text>
          ) : null}
          <DownloadLinks {...props} />
        </View>
      </View>
    </Card>
  ) : null;
});
