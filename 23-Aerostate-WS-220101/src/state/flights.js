import { createSlice } from "@reduxjs/toolkit";

export const flightsSlice = createSlice({
  name: "flights",
  initialState: {
    value: [],
  },
  reducers: {
    setFlights: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setFlights } = flightsSlice.actions;

export default flightsSlice.reducer;
