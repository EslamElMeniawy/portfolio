import analytics from "@react-native-firebase/analytics";
import { NavigationContainer } from "@react-navigation/native";
import { navigationRef, RootStack } from "@src/navigation";
import * as React from "react";

export default React.memo(() => {
  const routeNameRef = React.useRef<string | undefined>();

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        routeNameRef.current = navigationRef.getCurrentRoute()?.name;
      }}
      onStateChange={async () => {
        const previousRouteName = routeNameRef.current;
        const currentRouteName = navigationRef.getCurrentRoute()?.name;

        if (previousRouteName !== currentRouteName) {
          await analytics().logScreenView({
            screen_name: currentRouteName,
            screen_class: currentRouteName,
          });
        }

        // Save the current route name for later comparison.
        routeNameRef.current = currentRouteName;
      }}
    >
      <RootStack />
    </NavigationContainer>
  );
});
