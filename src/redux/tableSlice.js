import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cryptos: [],
  selectedCrypto: {},
  isModalBuyOpen: false,
  inputText: '',
  filtredCryptos: [],
  isFiltered: false
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
    setInputText: (state, action) => {
      state.inputText = action.payload;
    },
    setFiltredCryptos: (state, action) => {
      state.filtredCryptos = action.payload;
    },
    setIsFiltered: (state, action) => {
      state.isFiltered = action.payload;
    },
  }
})

export const { setCryptos, setSelectedCrypto, setIsModalBuyOpen, setInputText,
  setFiltredCryptos, setIsFiltered } = tableSlice.actions;
  
export default tableSlice.reducer;