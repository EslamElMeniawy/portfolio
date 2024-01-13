import { useAppDispatch, useAppSelector, removeErrorDialog } from "@src/store";
import * as React from "react";
import { useTranslation } from "react-i18next";
import { Dialog, Text, Button } from "react-native-paper";

export default React.memo(() => {
  const { t: translate } = useTranslation();

  // #region Redux
  const dispatch = useAppDispatch();

  const { errorDialogTitle, errorDialogMessage } = useAppSelector(
    (state) => state.dialogs,
  );
  // #endregion

  const onDismiss = () => {
    dispatch(removeErrorDialog());
  };

  return (
    <Dialog visible={Boolean(errorDialogMessage)} onDismiss={onDismiss}>
      {errorDialogTitle ? (
        <Dialog.Title>{errorDialogTitle}</Dialog.Title>
      ) : undefined}
      <Dialog.Content>
        <Text variant="bodyMedium">{errorDialogMessage}</Text>
      </Dialog.Content>
      <Dialog.Actions>
        <Button onPress={onDismiss}>{translate("ok")}</Button>
      </Dialog.Actions>
    </Dialog>
  );
});
