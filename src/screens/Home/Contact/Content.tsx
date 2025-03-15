import {
  ListEmptyComponent,
  ScrollContainer,
  ContactInfo,
} from "@src/components";
import { useGetContactApi } from "@src/core";
import { useFocusNotifyOnChangeProps } from "@src/utils";
import * as React from "react";
import { useTranslation } from "react-i18next";
import { ActivityIndicator, Card } from "react-native-paper";

import styles from "./styles";

export default React.memo(() => {
  const { t: translate } = useTranslation();
  const notifyOnChangeProps = useFocusNotifyOnChangeProps();

  const { data, isLoading, isFetching, refetch, error, isLoadingError } =
    useGetContactApi({
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
      {data ? (
        <Card style={styles.card}>
          <Card.Content style={styles.cardContent}>
            <ContactInfo data={data} />
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
