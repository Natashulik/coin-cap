import React from 'react';

const CryptoItem = ({crypto}) => {
  const { rank, name, symbol, priceUsd: price, changePercent24Hr: change24
  } = crypto;
  
  return <>
    
      <div className="crypto_item">
       <p>{rank}</p>
       <p>{name}</p>
       <p>{symbol}</p>
       <p>{price}</p>
       <p>{change24}</p>


       
      </div>
 
  </>
};

export default CryptoItem; 