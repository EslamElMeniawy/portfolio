import {useHideSplash} from './useHideSplash';
import {useSplashLanguageLoader} from './useSplashLanguageLoader';
import type {UseSplashProps} from './useSplash.types';

export const useSplash = (props: UseSplashProps) => {
  // #region Variables
  const {navigation, opacity, translateY, isBootSplashLogoLoaded} = props;
  // #endregion

  const isLanguageLoaded = useSplashLanguageLoader(isBootSplashLogoLoaded);

  const isBootSplashVisible = useHideSplash({
    navigation,
    opacity,
    translateY,
    isLanguageLoaded,
  });

  return isBootSplashVisible;
};
