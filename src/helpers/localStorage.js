export const saveWalletCryptos = walletCryptos => {
    const serializedWalletCryptos = JSON.stringify(walletCryptos);
    localStorage.setItem('walletCryptos', serializedWalletCryptos);
  };  

export const loadWalletCryptos = () => {
    const serializedWalletCryptos = localStorage.getItem('walletCryptos');
    if (serializedWalletCryptos == null) {
      return [];
    }
    return JSON.parse(serializedWalletCryptos);
  };

  export const saveSelectedCrypto = selectedCrypto => {
    const serializedSelectedCrypto = JSON.stringify(selectedCrypto);
    localStorage.setItem('selectedCrypto', serializedSelectedCrypto);
  };  

  export const loadSelectedCrypto = () => {
    const serializedSelectedCrypto = localStorage.getItem('selectedCrypto');
    if (serializedSelectedCrypto == null) {
      return {};
    }
    return JSON.parse(serializedSelectedCrypto);
  };
  
  
