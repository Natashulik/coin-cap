import { useSelector } from "react-redux";
import { useEffect } from "react";
import { formatedPrice } from "../helpers/formatedData";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { setSelectedCrypto } from "../redux/tableSlice";
import { loadSelectedCrypto } from "../helpers/localStorage";
import { setCryptos } from "../redux/tableSlice";
import { fetchAllCryptos } from "../helpers/fetchAllCryptos";

const PopularCryptos = () => {
    const cryptos = useSelector(state => state.table.cryptos);

    const bitcoin = cryptos.find(item => item.name === 'Bitcoin');
    const bitcoinPrice = bitcoin ? formatedPrice(bitcoin.priceUsd): '';


    const ethereum = cryptos.find(item => item.name === 'Ethereum');
    const ethereumPrice = bitcoin ? formatedPrice(ethereum.priceUsd): '';

    const tether = cryptos.find(item => item.name === 'Tether');
    const tetherPrice = bitcoin ? formatedPrice(tether.priceUsd): '';

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handlePopularCrypto=(crypto)=> {
      dispatch(setSelectedCrypto(crypto))
      navigate("/crypto");
      }

      const fetchData = async () => {
        const res = await fetchAllCryptos(); 
        dispatch(setCryptos(res.data));
   } 
    
      useEffect(() => {
           fetchData();
      }, [])
    
   return  <div className='popular_block'>
        <p className="popular_title"> Popular cryptocurrencies:</p>
        <div className="popular_cryptos">
          <div  className="popular_cryptos_item" onClick={()=> handlePopularCrypto(bitcoin)}>
           <p className="popular_name"> Bitcoin</p> 
           <p>{bitcoinPrice}$</p>
          </div>
          <div className="popular_cryptos_item" onClick={()=> handlePopularCrypto(ethereum)}> 
            <p className="popular_name">Ethereum</p> 
            <p>{ethereumPrice}$</p>
          </div>
          <div className="popular_cryptos_item"  onClick={()=> handlePopularCrypto(tether)}>
          <p className="popular_name">Tether</p> 
            <p>{tetherPrice}$</p>
           </div>  
        </div>
</div>

}


export default PopularCryptos;