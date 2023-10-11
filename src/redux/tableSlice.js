import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   cryptos: [],
   selectedCrypto: {},
 }

export const tableSlice = createSlice({
    name: "table",
    initialState,
    reducers: {
      setCryptos: (state, action) => {
        state.cryptos = action.payload;
      },
      setSelectedCrypto: (state, action) => {
        state.selectedCrypto = action.payload;
      },

    }
  })
  
  export const { setCryptos, setSelectedCrypto } = tableSlice.actions;
  export default tableSlice.reducer;