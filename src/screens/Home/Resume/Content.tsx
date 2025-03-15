import "@expo/match-media";
import {
  ListEmptyComponent,
  ScrollContainer,
  AboutInfo,
  ContactInfo,
} from "@src/components";
import { useGetAllResumePartsApi } from "@src/core";
import { useFocusNotifyOnChangeProps } from "@src/utils";
import * as React from "react";
import { useTranslation } from "react-i18next";
import { StyleSheet, View } from "react-native";
import { ActivityIndicator, Card } from "react-native-paper";
import { s, vs } from "react-native-size-matters";
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
      {aboutData?.length && contactData && resumeData ? (
        <Card style={styles.card}>
          <Card.Content style={styles.cardContent}>
            <View style={{ backgroundColor: "red", padding: 10 }}>
              {/* Top Part */}
            </View>
            <View
              style={{
                flexDirection: isSmallScreen ? "column" : "row",
                gap: isSmallScreen ? vs(8) : s(8),
              }}
            >
              <View
                style={StyleSheet.flatten([
                  styles.cardContent,
                  {
                    flex: isSmallScreen ? undefined : 35,
                    backgroundColor: "green",
                  },
                ])}
              >
                {/* Left Part */}
                <AboutInfo data={aboutData} />
                <ContactInfo data={contactData} />
              </View>
              <View
                style={{
                  flex: isSmallScreen ? undefined : 65,
                  backgroundColor: "blue",
                }}
              >
                {/* Right Part */}
              </View>
            </View>
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
