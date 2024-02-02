import { createSlice } from "@reduxjs/toolkit";

export const cashbookSlice = createSlice({
  name: "cashbook",
  initialState: {
    year: 0,
    month: 0,
  },
  reducers: {
    setYear: (state, action) => {
      state.year = action.payload;
    },
    setMonth: (state, action) => {
      state.month = action.payload;
    },
  },
});

export const { setYear, setMonth } = cashbookSlice.actions;
export default cashbookSlice.reducer;
