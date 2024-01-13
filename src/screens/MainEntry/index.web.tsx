import { ErrorFallbackView } from "@src/components";
import * as React from "react";
import { withErrorBoundary } from "react-error-boundary";

import App from "./App";

export default withErrorBoundary(App, {
  fallback: <ErrorFallbackView />,
  onError(error, info) {
    console.error("ErrorBoundary::onError", error, info);
  },
});
