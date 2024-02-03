import { Screen } from "@src/components";
import * as React from "react";

import Content from "./Content";
import Header from "./Header";

export default React.memo(() => (
  <Screen>
    <Header />
    <Content />
  </Screen>
));
