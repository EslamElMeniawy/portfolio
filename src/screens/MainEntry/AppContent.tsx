import { ErrorDialog, Toast } from "@src/components";
import { NavigationContainer } from "@src/navigation";
import { useAppTheme, queryClient, getStatusBarHeight } from "@src/utils";
import { QueryClientProvider } from "@tanstack/react-query";
import { useFonts } from "expo-font";
import * as React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import { ToastProvider } from "react-native-toast-notifications";

import { useLocalizationInitialization } from "./useLocalizationInitialization";
import { useNetworkListener } from "./useNetworkListener";
import { useReactQueryFocusManager } from "./useReactQueryFocusManager";
import { useReactQueryOnlineManager } from "./useReactQueryOnlineManager";

export default React.memo(() => {
  const languageLoaded = useLocalizationInitialization();

  const [fontsLoaded] = useFonts({
    "Rubik-Regular": require("@src/assets/fonts/Rubik-Regular.ttf"),
    "Rubik-SemiBold": require("@src/assets/fonts/Rubik-SemiBold.ttf"),
  });

  useNetworkListener();
  useReactQueryFocusManager();
  useReactQueryOnlineManager();
  const theme = useAppTheme();

  // #region UI
  return languageLoaded && fontsLoaded ? (
    <PaperProvider theme={theme}>
      <ToastProvider
        placement="top"
        offset={getStatusBarHeight()}
        renderToast={(toastOptions) => <Toast {...toastOptions} />}
      >
        <QueryClientProvider client={queryClient}>
          <NavigationContainer />
          <ErrorDialog />
        </QueryClientProvider>
      </ToastProvider>
    </PaperProvider>
  ) : null;
  // #endregion
});
