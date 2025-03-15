import { AppSvgImages } from "@src/constants";
import { openUrl, useAppTheme } from "@src/utils";
import * as React from "react";
import { ms } from "react-native-size-matters";

import Button from "./Button";
import { Props } from "./types";

export default React.memo((props: Props) => {
  // #region Logger
  const getLogMessage = (message: string) =>
    `## Home::Contact::LinkedinButton:: ${message}`;
  // #endregion

  const { data } = props;
  const theme = useAppTheme();

  const _onPress = () => {
    console.info(getLogMessage("_onPress"));

    openUrl(
      data?.linkedin ? `https://linkedin.com/in/${data?.linkedin}` : undefined,
    );
  };

  return data?.linkedin ? (
    <Button
      icon={
        <AppSvgImages.Linkedin
          fill={theme.colors.onSurface}
          width={ms(12)}
          height={ms(12)}
        />
      }
      text={data.linkedin}
      onPress={_onPress}
    />
  ) : null;
});
