import wallet from "../assets/wallet_icon.svg";
import { formatedPrice } from '../helpers/formatedData';
import { useSelector } from "react-redux";

const Wallet = () => {
    const walletAmount = useSelector(state => state.crypto.walletAmount);

   return  <div className='wallet_block'>
        <img  className="wallet_image" src={wallet} alt="кошелек" /> 
        <div className="wallet_total">
            <p className="wallet_title">Total: </p>
            <p className="wallet_value">{formatedPrice(walletAmount)} $</p>
        </div>
        </div>
}


export default Wallet;