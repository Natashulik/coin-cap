import Header from "../components/Header";
import CryptosTable from "../components/CryptosTable";
import PopularCryptos from "../components/PopularCryptos";
import Wallet from "../components/Wallet";

const Main = () => {
    return <div >
      <Header/>
     <div className='wrapper'> 
          <div className="main_info_block">
            <PopularCryptos/>
            <Wallet />    
          </div>
       <CryptosTable />
      </div>
     
          </div>
}

export default Main;