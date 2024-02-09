import { ListEmptyComponent, ListLoadingMore } from "@src/components";
import { useGetProjectsApi } from "@src/core";
import { useAppTheme, useFocusNotifyOnChangeProps } from "@src/utils";
import * as React from "react";
import { useTranslation } from "react-i18next";
import { FlatList, RefreshControl, useWindowDimensions } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { ms } from "react-native-size-matters";

import ProjectItem from "./ProjectItem";
import styles from "./styles";

export default React.memo(() => {
  const { t: translate } = useTranslation();
  const notifyOnChangeProps = useFocusNotifyOnChangeProps();
  const theme = useAppTheme();
  const { width } = useWindowDimensions();

  const {
    data: allPages,
    isLoading,
    isFetching,
    isFetchingNextPage,
    refetch,
    fetchNextPage,
    error,
    isLoadingError,
  } = useGetProjectsApi({
    notifyOnChangeProps: notifyOnChangeProps?.(),
  });

  const projectsList = allPages?.pages
    ?.map((page) => (page.data ? page.data : []))
    ?.flat();

  const numColumns = Math.round(width / ms(320));

  return isLoading ? (
    <ActivityIndicator size="large" style={styles.loadingIndicator} />
  ) : (
    <>
      <FlatList
        key={`list_${numColumns}`}
        numColumns={numColumns}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        keyboardDismissMode="none"
        keyExtractor={(item) => `project_${item.id ?? 0}`}
        onEndReachedThreshold={0.01}
        style={styles.list}
        data={projectsList}
        renderItem={(info) => <ProjectItem {...info} />}
        ListEmptyComponent={
          <ListEmptyComponent
            data={translate("projects")}
            error={error}
            isLoadingError={isLoadingError}
          />
        }
        refreshing={isFetching && !isFetchingNextPage}
        refreshControl={
          <RefreshControl
            colors={[theme.colors.primary]}
            tintColor={theme.colors.primary}
            refreshing={isFetching && !isFetchingNextPage}
            onRefresh={() => refetch()}
          />
        }
        onEndReached={() => fetchNextPage()}
        contentContainerStyle={
          !projectsList || !projectsList.length ? styles.emptyList : undefined
        }
      />
      <ListLoadingMore isFetchingNextPage={isFetchingNextPage} />
    </>
  );
});
