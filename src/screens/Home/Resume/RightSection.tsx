import * as React from "react";
import { View, StyleSheet } from "react-native";

import Education from "./Education";
import Languages from "./Languages";
import Skills from "./Skills";
import WorkExperience from "./WorkExperience";
import styles from "./styles";
import { RightSectionProps } from "./types";

export default React.memo((props: RightSectionProps) => {
  const { flex, data } = props;

  return (
    <View style={StyleSheet.flatten([styles.rightContainer, { flex }])}>
      <WorkExperience data={data?.workExperience} />
      <Education data={data?.education} />
      <Skills data={data?.skills} />
      <Languages data={data?.languages} />
    </View>
  );
});
