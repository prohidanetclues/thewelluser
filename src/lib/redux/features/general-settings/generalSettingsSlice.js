import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "@/utils/axiosInstances";

// Async thunk for fetching general settings
export const fetchGeneralSettings = createAsyncThunk("generalSettings/fetchGeneralSettings", async (_, { rejectWithValue }) => {
  try {
    const response = await axiosInstance.get(`/general-settings/get-user-settings-list/`);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response && error.response.data ? error.response.data : {success: false, message: "Technical Error"});
  }
});

const initialState = {
  status: null,
  data: {},
  error: null,
};

export const generalSettingsSlice = createSlice({
  name: "generalSettings",
  initialState,
  reducers: {
    // Other reducers can be defined here if needed
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGeneralSettings.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchGeneralSettings.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload.generalSettings;
      })
      .addCase(fetchGeneralSettings.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default generalSettingsSlice.reducer;
