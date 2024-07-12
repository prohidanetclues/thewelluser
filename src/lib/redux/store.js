import { configureStore } from "@reduxjs/toolkit";
import generalSettingsSlice from "./features/general-settings/generalSettingsSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      generalSettings: generalSettingsSlice,
    },
  });
};
