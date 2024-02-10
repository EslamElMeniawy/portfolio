import { ListEmptyComponent, ScrollContainer } from "@src/components";
import * as React from "react";
import { useTranslation } from "react-i18next";
import { ActivityIndicator } from "react-native-paper";

import Description from "./Description";
import Info from "./Info";
import Screenshots from "./Screenshots";
import styles from "./styles";
import { ContentProps } from "./types";

export default React.memo((props: ContentProps) => {
  const { isLoading, project } = props;

  const { t: translate } = useTranslation();

  return isLoading ? (
    <ActivityIndicator size="large" style={styles.loadingIndicator} />
  ) : (
    <ScrollContainer>
      {project ? (
        <>
          <Info {...props} />
          <Description {...props} />
          <Screenshots {...props} />
        </>
      ) : (
        <ListEmptyComponent
          data={translate("project")}
          isLoadingError={false}
        />
      )}
    </ScrollContainer>
  );
});
