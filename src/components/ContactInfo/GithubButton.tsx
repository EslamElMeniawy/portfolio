import { AppSvgImages } from "@src/constants";
import { openUrl, useAppTheme } from "@src/utils";
import * as React from "react";
import { ms } from "react-native-size-matters";

import Button from "./Button";
import { Props } from "./types";

export default React.memo((props: Props) => {
  // #region Logger
  const getLogMessage = (message: string) =>
    `## Home::Contact::GithubButton:: ${message}`;
  // #endregion

  const { data } = props;
  const theme = useAppTheme();

  const _onPress = () => {
    console.info(getLogMessage("_onPress"));
    openUrl(data?.github ? `https://github.com/${data?.github}` : undefined);
  };

  return data?.github ? (
    <Button
      icon={
        <AppSvgImages.Github
          fill={theme.colors.onSurface}
          width={ms(12)}
          height={ms(12)}
        />
      }
      text={data.github}
      onPress={_onPress}
    />
  ) : null;
});
