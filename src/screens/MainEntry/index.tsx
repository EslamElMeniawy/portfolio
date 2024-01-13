import crashlytics from "@react-native-firebase/crashlytics";
import { ErrorFallbackView } from "@src/components";
import * as React from "react";
import { withErrorBoundary } from "react-error-boundary";
import { Platform } from "react-native";

import App from "./App";

export default withErrorBoundary(App, {
  fallback: <ErrorFallbackView />,
  onError(error, info) {
    console.error("ErrorBoundary::onError", error, info);

    // Log error to Firebase.
    if (process.env.EXPO_ENABLE_FIREBASE_LOG) {
      crashlytics().recordError(
        new Error(
          `## ERROR ## Message: ErrorBoundary::onError ## Data: ${JSON.stringify(
            { error, info },
          )}`,
        ),
      );
    }
  },
});
