import React from 'react';
import Header from "../components/Header";
import PopularCryptos from "../components/PopularCryptos";
import SelectedCrypto from "../components/SelectedCrypto";
import Wallet from "../components/Wallet";
import Graph from "../components/Graph";
import CryptoInfo from '../components/CryptoInfo';

const Crypto = () => {
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
  </div>
}

export default Crypto;