import * as React from "react";
import { memo } from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const SvgComponent = (props: SvgProps) => (
  <Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
    <Path d="M16.61 15.15c-.46 0-.84-.37-.84-.83s.38-.82.84-.82c.46 0 .84.36.84.82 0 .46-.38.83-.84.83m-9.2 0c-.46 0-.84-.37-.84-.83 0-.46.38-.82.84-.82.46 0 .83.36.83.82 0 .46-.37.83-.83.83m9.5-5.01 1.67-2.88c.09-.17.03-.38-.13-.47-.17-.1-.38-.04-.45.13l-1.71 2.91A10.15 10.15 0 0 0 12 8.91c-1.53 0-3 .33-4.27.91L6.04 6.91a.334.334 0 0 0-.47-.13c-.17.09-.22.3-.13.47l1.66 2.88C4.25 11.69 2.29 14.58 2 18h20c-.28-3.41-2.23-6.3-5.09-7.86Z" />
  </Svg>
);

const Memo = memo(SvgComponent);
export default Memo;
