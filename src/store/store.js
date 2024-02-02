import { configureStore } from "@reduxjs/toolkit";
import cashbookReducer from "./cashbook/cashbook"
import monthlyPlanReducer from "./monthlyPlan/monthlyPlan";

export default configureStore({
    reducer: {
      cashbook: cashbookReducer,
      monthlyPlan: monthlyPlanReducer,
    },
  });