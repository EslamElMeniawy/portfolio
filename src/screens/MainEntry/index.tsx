import crashlytics from "@react-native-firebase/crashlytics";
import { ErrorFallbackView } from "@src/components";
import * as React from "react";
import { withErrorBoundary } from "react-error-boundary";

import App from "./App";

export default withErrorBoundary(App, {
  fallback: <ErrorFallbackView />,
  onError(error, info) {
    console.error("ErrorBoundary::onError", error, info);

    // Log error to Firebase.
    if (process.env.ENABLE_FIREBASE_LOG === "true") {
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
