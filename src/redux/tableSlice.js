import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   cryptos: [],
   selectedCrypto: {},
   isModalBuyOpen: false
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
      setIsModalBuyOpen: (state, action) => {
        state.isModalBuyOpen = action.payload;
      },

    }
  })
  
  export const { setCryptos, setSelectedCrypto, setIsModalBuyOpen } = tableSlice.actions;
  export default tableSlice.reducer;