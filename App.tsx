import "react-native-gesture-handler";
import { MainEntry } from "@src/screens";
import * as SplashScreen from "expo-splash-screen";
import * as React from "react";
import { enableScreens } from "react-native-screens";

import * as serviceWorkerRegistration from "./src/service-worker/serviceWorkerRegistration";

enableScreens();

SplashScreen.preventAutoHideAsync();

export default function App() {
  return <MainEntry />;
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();
