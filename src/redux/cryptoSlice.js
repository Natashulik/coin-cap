import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cryptoQuantity: 0,
  historyData: [],
  interval: 'h1',
  selectedButton: '24H',
}

export const cryptoSlice = createSlice({
  name: "crypto",
  initialState,
  reducers: {
    setCryptoQuantity: (state, action) => {
      state.cryptoQuantity = action.payload;
    },
    setHistoryData: (state, action) => {
      state.historyData = action.payload;
    },
    setSelectedButton: (state, action) => {
      state.selectedButton = action.payload;
    },
    setInterval: (state, action) => {
      state.interval = action.payload;
    },
  }
})

export const { setCryptoQuantity, setHistoryData, setSelectedButton, setInterval } = cryptoSlice.actions;
export default cryptoSlice.reducer;