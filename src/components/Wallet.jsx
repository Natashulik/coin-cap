import wallet from "../assets/wallet_icon.svg";

const Wallet = () => {
    

   return  <div className='wallet_block'>
        <img  className="wallet_image" src={wallet} alt="кошелек" /> 
        <div className="wallet_total">
            <p className="wallet_title">Total: </p>
            <p className="wallet_value">1256516 $</p>
        </div>
        </div>
}


export default Wallet;