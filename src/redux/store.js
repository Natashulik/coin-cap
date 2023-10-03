import { configureStore } from "@reduxjs/toolkit";
import tableSlice from "./tableSlice";


export const store = configureStore({
  reducer: {
    table: tableSlice
    }
})