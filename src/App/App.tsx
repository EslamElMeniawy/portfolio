import * as React from 'react';
import {View} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Provider as ReduxProvider} from 'react-redux';
import {store} from '@src/store';
import {useAppTheme} from '@src/utils';
import AppContent from './AppContent';
import styles from './styles';

export default React.memo(() => {
  const theme = useAppTheme();

  return (
    <GestureHandlerRootView style={styles.container}>
      <View
        style={[styles.container, {backgroundColor: theme.colors.background}]}>
        <ReduxProvider store={store}>
          <AppContent />
        </ReduxProvider>
      </View>
    </GestureHandlerRootView>
  );
});
