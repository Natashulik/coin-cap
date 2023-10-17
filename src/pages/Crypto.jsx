import React from 'react';
import Header from "../components/Header";
import PopularCryptos from "../components/PopularCryptos";
import SelectedCrypto from "../components/SelectedCrypto";
import Wallet from "../components/Wallet";
import Graph from "../components/Graph";
import CryptoInfo from '../components/CryptoInfo';
import { useSelector } from "react-redux";
import ModalWallet from "../components/ModalWallet";

const Crypto = () => {
  const isModalWalletOpen = useSelector(state => state.wallet.isModalWalletOpen)

  return <div >
     <div className='wrapper'>
     <Header />
      <div className="main_info_block">
        <PopularCryptos />
        <Wallet />
      </div>
      <SelectedCrypto />
      <div className='detailed_block'>
        <Graph />
        <CryptoInfo />
      </div>
    </div>
    {isModalWalletOpen && <div className="overlay"> <ModalWallet /> </div>}
  </div>
}

export default Crypto;