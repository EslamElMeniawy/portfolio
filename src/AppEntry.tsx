import 'react-native-gesture-handler';
import * as React from 'react';
import {enableScreens} from 'react-native-screens';

enableScreens();

function AppEntry() {
  const App = React.lazy(() => import('@src/App'));

  return (
    <React.Suspense>
      <App />
    </React.Suspense>
  );
}

export default AppEntry;
