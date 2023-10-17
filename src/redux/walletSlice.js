import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   isModalWalletOpen: false,
   walletAmount: 0,
   walletCryptos: [],
 }

export const walletSlice = createSlice({
    name: "table",
    initialState,
    reducers: {
      setIsModalWalletOpen: (state, action) => {
        state.isModalWalletOpen = action.payload;
      },
      setWalletAmount: (state, action) => {
        state.walletAmount = action.payload;
      },
      setWalletCryptos: (state, action) => {
        const index = state.walletCryptos.findIndex(item => item.id === action.payload.id);
        if(index ===-1) {
          state.walletCryptos.push(action.payload);
        } else {
          state.walletCryptos[index].quantity += action.payload.quantity;
        }
        
      },
      setPriceCurrent: (state, action) =>  {
        const index = state.walletCryptos.findIndex(item => item.id === action.payload.id);
        state.walletCryptos[index].priceCurrent = action.payload.priceCurrent;
      },
      deleteWalletCrypto: (state, action) =>  {
        state.walletCryptos = state.walletCryptos.filter(item => item.id != action.payload);
      }
    }
  })
  
  export const { setIsModalWalletOpen, setWalletAmount, setWalletCryptos, setPriceCurrent, deleteWalletCrypto } = walletSlice.actions;
  export default walletSlice.reducer;