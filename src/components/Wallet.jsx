import wallet from "../assets/wallet_icon.svg";
import { formatedPrice } from '../helpers/formatedData';
import { useSelector , useDispatch} from "react-redux";
import { setIsModalWalletOpen, setPriceCurrent } from "../redux/walletSlice";
import { fetchCrypto } from "../helpers/fetchCrypto";

const Wallet = () => {
    const walletAmount = useSelector(state => state.wallet.walletAmount);
    const walletCryptos = useSelector(state => state.wallet.walletCryptos);
    const dispatch =useDispatch();

    const fetchData = async () => {
        walletCryptos.forEach(async (item) => {
          try {
            const newData = await fetchCrypto(item.id);
            dispatch(setPriceCurrent({...item, priceCurrent: newData.data.priceUsd}));
           } catch (error) {
            console.log(error);
          }
        });
      }

    const handleClick = () => {
        fetchData();
        dispatch(setIsModalWalletOpen(true));
       }

   return  <div className='wallet_block' onClick={handleClick}>
        <img  className="wallet_image" src={wallet} alt="кошелек" /> 
        <div className="wallet_total">
            <p className="wallet_title">Total: </p>
            <p className="wallet_value">{formatedPrice(walletAmount)} $</p>
        </div>
        </div>
}


export default Wallet;