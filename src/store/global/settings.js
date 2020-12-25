import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sideNavExpand: true,
};

const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setSideNavExpand(state, { payload }) {
      return {
        ...state,
        sideNavExpand: payload,
      };
    },
    resetSettings() {
      return {
        ...initialState,
      };
    },
  },
});

export const { setSideNavExpand, resetSettings } = settingsSlice.actions;

export default settingsSlice.reducer;
