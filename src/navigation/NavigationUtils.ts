/**
 * NavigationUtils
 *
 * Helper methods for navigating while you have no access to the navigation prop.
 * These methods should be used only if you don't have a navigation prop.
 * If you need to navigate from nested component without passing the navigation prop
 * don't use these methods instead you can use "useNavigation".
 */

import { createNavigationContainerRef } from "@react-navigation/native";
import type { RootStackParamList } from "@src/navigation";

export const navigationRef = createNavigationContainerRef<RootStackParamList>();
