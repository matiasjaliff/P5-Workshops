import { createSlice } from "@reduxjs/toolkit";

export const airportsSlice = createSlice({
  name: "airports",
  initialState: {
    value: [],
  },
  reducers: {
    setAirports: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setAirports } = airportsSlice.actions;

export default airportsSlice.reducer;
