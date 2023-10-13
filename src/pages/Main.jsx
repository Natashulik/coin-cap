import Header from "../components/Header";
import CryptosTable from "../components/CryptosTable";
import PopularCryptos from "../components/PopularCryptos";
import Wallet from "../components/Wallet";
import ModalBuy from "../components/ModalBuy";
import { useSelector } from "react-redux";

const Main = () => {
  const isModalBuyOpen = useSelector(state => state.table.isModalBuyOpen)

  return  <div className='wrapper'>
    <Header />
        <div className="main_info_block">
        <PopularCryptos />
        <Wallet />
      </div>
      <CryptosTable />
      {isModalBuyOpen && <div className="overlay"> <ModalBuy /> </div>}
    </div>

}

export default Main;