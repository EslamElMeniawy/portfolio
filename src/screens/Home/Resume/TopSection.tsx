import * as React from "react";
import { View } from "react-native";

import { TopSectionProps } from "./types";

export default React.memo((props: TopSectionProps) => {
  const { data } = props;

  return (
    <View style={{ backgroundColor: "red" }}>
      <></>
    </View>
  );
});
