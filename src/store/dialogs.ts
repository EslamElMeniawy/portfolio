import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import type { DialogsState } from "./dialogs.types";

const initialState = {
  errorDialogTitle: undefined,
  errorDialogMessage: undefined,
} as DialogsState;

export const errorDialogSlice = createSlice({
  name: "dialogs",
  initialState,
  reducers: {
    setErrorDialogMessage(state, action: PayloadAction<string>) {
      state.errorDialogTitle = undefined;
      state.errorDialogMessage = action.payload;
    },
    setErrorDialogTitleMessage(
      state,
      action: PayloadAction<{ title: string; message: string }>,
    ) {
      state.errorDialogTitle = action.payload.title;
      state.errorDialogMessage = action.payload.message;
    },
    removeErrorDialog(state) {
      state.errorDialogTitle = undefined;
      state.errorDialogMessage = undefined;
    },
  },
});

export const {
  setErrorDialogMessage,
  setErrorDialogTitleMessage,
  removeErrorDialog,
} = errorDialogSlice.actions;

export default errorDialogSlice.reducer;
