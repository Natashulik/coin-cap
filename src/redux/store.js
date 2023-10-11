import { configureStore } from "@reduxjs/toolkit";
import tableSlice from "./tableSlice";
import cryptoSlice from "./cryptoSlice";


export const store = configureStore({
  reducer: {
    table: tableSlice,
    crypto: cryptoSlice
    }
})