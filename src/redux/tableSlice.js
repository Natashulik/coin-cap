import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   cryptos: [],
 }

export const tableSlice = createSlice({
    name: "table",
    initialState,
    reducers: {
      setCryptos: (state, action) => {
        state.cryptos = action.payload;
      },
    }
  })
  
  export const { setCryptos } = tableSlice.actions;
  export default tableSlice.reducer;