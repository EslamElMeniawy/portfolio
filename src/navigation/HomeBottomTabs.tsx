import type { HomeBottomTabsParamList } from "@src/navigation";
import { About, Portfolio, Resume, Contact } from "@src/screens";
import * as React from "react";
import { useTranslation } from "react-i18next";
import { createMaterialBottomTabNavigator } from "react-native-paper/react-navigation";

const MaterialBottomTabs =
  createMaterialBottomTabNavigator<HomeBottomTabsParamList>();

export default React.memo(() => {
  const { t: translate } = useTranslation();

  return (
    <MaterialBottomTabs.Navigator id="HomeBottomTabs" initialRouteName="About">
      {/* Screens */}
      <MaterialBottomTabs.Screen
        name="About"
        component={About}
        options={{ tabBarIcon: "information", title: translate("about_me") }}
      />
      <MaterialBottomTabs.Screen
        name="Portfolio"
        component={Portfolio}
        options={{
          tabBarIcon: "application-brackets",
          title: translate("portfolio"),
        }}
      />
      <MaterialBottomTabs.Screen
        name="Resume"
        component={Resume}
        options={{ tabBarIcon: "file-document", title: translate("resume") }}
      />
      <MaterialBottomTabs.Screen
        name="Contact"
        component={Contact}
        options={{ tabBarIcon: "account-box", title: translate("contact_me") }}
      />
    </MaterialBottomTabs.Navigator>
  );
});
