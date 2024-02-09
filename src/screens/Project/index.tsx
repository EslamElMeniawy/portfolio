import { Screen } from "@src/components";
import { RootStackScreenProps } from "@src/navigation";
import * as React from "react";

import Content from "./Content";
import Header from "./Header";

export default React.memo((props: RootStackScreenProps<"Project">) => {
  const { route } = props;
  const { params } = route;
  const { project } = params ?? {};

  return (
    <Screen>
      <Header project={project} />
      <Content project={project} />
    </Screen>
  );
});
