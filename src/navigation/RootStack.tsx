import { createNativeStackNavigator } from "@react-navigation/native-stack";
import type { RootStackParamList } from "@src/navigation";
import { HomeBottomTabs } from "@src/navigation";
import { Project, NotFound } from "@src/screens";
import * as React from "react";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default React.memo(() => (
  <Stack.Navigator
    id="RootStack"
    initialRouteName="Home"
    screenOptions={{ headerShown: false }}
  >
    {/* Screens */}
    <Stack.Screen name="Project" component={Project} />
    <Stack.Screen name="NotFound" component={NotFound} />

    {/* Navigators */}
    <Stack.Screen name="Home" component={HomeBottomTabs} />
  </Stack.Navigator>
));
