import { configureStore } from "@reduxjs/toolkit";
import tableSlice from "./tableSlice";
import cryptoSlice from "./cryptoSlice";
import walletSlice from "./walletSlice";

export const store = configureStore({
  reducer: {
    table: tableSlice,
    crypto: cryptoSlice,
    wallet: walletSlice
  }
})