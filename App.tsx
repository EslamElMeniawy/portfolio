import "react-native-gesture-handler";
import { MainEntry } from "@src/screens";
import * as SplashScreen from "expo-splash-screen";
import * as React from "react";
import { enableScreens } from "react-native-screens";

enableScreens();

SplashScreen.preventAutoHideAsync();

export default function App() {
  return <MainEntry />;
}
