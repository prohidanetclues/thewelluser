"use client";
import React, { useRef } from "react";
import { Provider } from "react-redux";
import { makeStore } from "@/lib/redux/store";
import { fetchGeneralSettings } from "@/lib/redux/features/general-settings/generalSettingsSlice";

export default function ReduxProvider({ children }) {
  const storeRef = useRef();
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore();
    storeRef.current.dispatch(fetchGeneralSettings());
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
