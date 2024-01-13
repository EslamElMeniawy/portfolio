import "react-native-gesture-handler";
import * as React from "react";
import { enableScreens } from "react-native-screens";

import * as serviceWorkerRegistration from "./src/service-worker/serviceWorkerRegistration";

enableScreens();

export default function App() {
  const App = React.lazy(() => import("@src/screens/MainEntry"));

  return (
    <React.Suspense>
      <App />
    </React.Suspense>
  );
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();
