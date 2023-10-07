
 export const fetchAllCryptos = async () => {
   let url = `${process.env.REACT_APP_URL_ALL_CRYPTOS}`
    const result = await fetch(url);
    const data = await result.json();
    return data;
  }
  
