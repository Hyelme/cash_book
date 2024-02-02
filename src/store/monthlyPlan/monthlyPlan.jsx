import { createSlice } from "@reduxjs/toolkit";

export const monthlyPlanSlice = createSlice({
  name: "monthlyPlan",
  initialState: {
    basicPay: 0,
    bonusPay: 0,
  },
  reducers: {
    setBasicPay: (state, action) => {
      state.basicPay = action.payload;
    },
    setBonusPay: (state, action) => {
      state.bonusPay = action.payload;
    },
  },
});

export const { setBasicPay, setBonusPay } = monthlyPlanSlice.actions;
export default monthlyPlanSlice.reducer;
