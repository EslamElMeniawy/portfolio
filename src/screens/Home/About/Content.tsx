import { ListEmptyComponent, ScrollContainer } from "@src/components";
import { useGetAboutApi } from "@src/core";
import { useFocusNotifyOnChangeProps } from "@src/utils";
import * as React from "react";
import { useTranslation } from "react-i18next";
import { ActivityIndicator, Card, Text } from "react-native-paper";

import styles from "./styles";

export default React.memo(() => {
  const { t: translate } = useTranslation();
  const notifyOnChangeProps = useFocusNotifyOnChangeProps();

  const { data, isLoading, isFetching, refetch, error, isLoadingError } =
    useGetAboutApi({
      notifyOnChangeProps: notifyOnChangeProps?.(),
    });

  return isLoading ? (
    <ActivityIndicator size="large" style={styles.loadingIndicator} />
  ) : (
    <ScrollContainer
      bounces
      refreshing={isFetching}
      onRefresh={() => refetch()}
    >
      {data && data.length ? (
        <Card style={styles.card}>
          <Card.Content style={styles.cardContent}>
            {data.map((item) => (
              <Text key={item} style={styles.text}>
                {item}
              </Text>
            ))}
          </Card.Content>
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
