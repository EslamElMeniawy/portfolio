import "@expo/match-media";
import { ListEmptyComponent, ScrollContainer } from "@src/components";
import { useGetAllResumePartsApi } from "@src/core";
import { useFocusNotifyOnChangeProps } from "@src/utils";
import * as React from "react";
import { useTranslation } from "react-i18next";
import { ActivityIndicator, Card } from "react-native-paper";
import { useMediaQuery } from "react-responsive";

import styles from "./styles";

export default React.memo(() => {
  const { t: translate } = useTranslation();
  const isSmallScreen = useMediaQuery({ maxWidth: 479 });
  const notifyOnChangeProps = useFocusNotifyOnChangeProps();

  const data = useGetAllResumePartsApi(
    {
      notifyOnChangeProps: notifyOnChangeProps?.(),
    },
    {
      notifyOnChangeProps: notifyOnChangeProps?.(),
    },
    {
      notifyOnChangeProps: notifyOnChangeProps?.(),
    },
  );

  const isLoading = data.some((item) => item.isLoading);
  const isFetching = data.some((item) => item.isFetching);
  const refetch = () => data.forEach((item) => item.refetch());
  const error = data.find((item) => item.error)?.error;
  const isLoadingError = data.some((item) => item.isLoadingError);
  const aboutData = data[0].data;
  const contactData = data[1].data;
  const resumeData = data[2].data;

  return isLoading ? (
    <ActivityIndicator size="large" style={styles.loadingIndicator} />
  ) : (
    <ScrollContainer
      bounces
      refreshing={isFetching}
      onRefresh={() => refetch()}
    >
      {data ? (
        <Card style={styles.card}>
          <>{/* Top Part */}</>
          <>{/* Left Part */}</>
          <>{/* Right Part */}</>
        </Card>
      ) : (
        <ListEmptyComponent
          data={translate("information")}
          error={error}
          isLoadingError={isLoadingError}
        />
      )}
    </ScrollContainer>
  );
});
