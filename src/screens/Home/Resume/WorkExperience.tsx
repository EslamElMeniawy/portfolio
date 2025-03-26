import * as React from "react";
import { useTranslation } from "react-i18next";
import { Text } from "react-native-paper";

import WorkExperienceItem from "./WorkExperienceItem";
import styles from "./styles";
import { WorkExperienceProps } from "./types";

export default React.memo((props: WorkExperienceProps) => {
  const { data } = props;
  const { t: translate } = useTranslation();

  return (
    <>
      <Text variant="titleMedium" style={styles.subTitle}>
        {translate("work_experience")}
      </Text>
      {data?.map((item) => (
        <WorkExperienceItem
          key={`${item.job}-${item.company}-${item.date}`}
          data={item}
        />
      ))}
    </>
  );
});
