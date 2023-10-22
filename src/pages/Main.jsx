import Header from "../components/Header";
import CryptosTable from "../components/CryptosTable";
import PopularCryptos from "../components/PopularCryptos";
import Wallet from "../components/Wallet";
import ModalBuy from "../components/ModalBuy";
import { useSelector } from "react-redux";
import ModalWallet from "../components/ModalWallet";
import Search from "../components/Search";

const Main = () => {
  const isModalBuyOpen = useSelector(state => state.table.isModalBuyOpen)
  const isModalWalletOpen = useSelector(state => state.wallet.isModalWalletOpen)

  return <div className='wrapper'>
    <Header />
    <div className="main_info_block">
      <PopularCryptos />
      <Wallet />
    </div>
    <Search />
    <CryptosTable />
    {isModalBuyOpen && <div className="overlay"> <ModalBuy /> </div>}
    {isModalWalletOpen && <div className="overlay"> <ModalWallet /> </div>}
  </div>

}

export default Main;