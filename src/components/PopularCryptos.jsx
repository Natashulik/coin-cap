import { useSelector } from "react-redux";
import { formatedPrice } from "../helpers/formatedData";

const PopularCryptos = () => {
    const cryptos = useSelector(state => state.table.cryptos);

    const bitcoin = cryptos.find(item => item.name === 'Bitcoin');
    const bitcoinPrice = bitcoin ? formatedPrice(bitcoin.priceUsd): '';

    const ethereum = cryptos.find(item => item.name === 'Ethereum');
    const ethereumPrice = bitcoin ? formatedPrice(ethereum.priceUsd): '';

    const tether = cryptos.find(item => item.name === 'Tether');
    const tetherPrice = bitcoin ? formatedPrice(tether.priceUsd): '';

   return  <div className='popular_block'>
        <p className="popular_title"> Popular cryptocurrencies:</p>
        <div className="popular_cryptos">
          <div  className="popular_cryptos_item">
           <p className="popular_name"> Bitcoin</p> 
           <p>{bitcoinPrice}$</p>
          </div>
          <div className="popular_cryptos_item"> 
            <p className="popular_name">Ethereum</p> 
            <p>{ethereumPrice}$</p>
          </div>
          <div className="popular_cryptos_item">
          <p className="popular_name">Tether</p> 
            <p>{tetherPrice}$</p>
           </div>  
        </div>
</div>

}


export default PopularCryptos;