import { NavigationContainer } from "@react-navigation/native";
import { navigationRef, RootStack } from "@src/navigation";
import * as React from "react";
import { useTranslation } from "react-i18next";
import { Text } from "react-native-paper";

import { useLinking } from "./useLinking";

export default React.memo(() => {
  const routeNameRef = React.useRef<string | undefined>();
  const { t: translate } = useTranslation();
  const linking = useLinking();

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        routeNameRef.current = navigationRef.getCurrentRoute()?.name;
      }}
      onStateChange={async () => {
        const currentRouteName = navigationRef.getCurrentRoute()?.name;

        // Save the current route name for later comparison.
        routeNameRef.current = currentRouteName;
      }}
      linking={linking}
      fallback={<Text>{`${translate("loading")}...`}</Text>}
    >
      <RootStack />
    </NavigationContainer>
  );
});
