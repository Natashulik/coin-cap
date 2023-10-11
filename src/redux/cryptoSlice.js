import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   cryptoQuantity: 0,
   walletAmount: 0,
   historyData: []
 }

export const cryptoSlice = createSlice({
    name: "crypto",
    initialState,
    reducers: {
      setCryptoQuantity: (state, action) => {
        state.cryptoQuantity = action.payload;
      },
      setWalletAmount: (state, action) => {
        state.walletAmount = action.payload;
      },
      setHistoryData: (state, action) => {
        state.historyData = action.payload;
      },
     

    }
  })
  
  export const { setCryptoQuantity, setWalletAmount, setHistoryData } = cryptoSlice.actions;
  export default cryptoSlice.reducer;