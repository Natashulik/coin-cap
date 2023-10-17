import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { Table, ConfigProvider } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { setIsModalWalletOpen,setWalletCryptos, setPriceCurrent, deleteWalletCrypto } from "../redux/walletSlice";
import { DeleteTwoTone } from "@ant-design/icons";
import { formatedPrice, formatedPercent } from "../helpers/formatedData";
import { fetchCrypto } from "../helpers/fetchCrypto";
import arrow from "../assets/arrow3.png";


const ModalWallet = () => {
    const walletCryptos = useSelector(state => state.wallet.walletCryptos);
console.log(walletCryptos);

    const totalParchase = walletCryptos.reduce((sum, item)=> sum + Number(item.price)*item.quantity, 0)
    const totalCurrent = walletCryptos.reduce((sum, item)=> sum + Number(item.priceCurrent)*item.quantity, 0)
    const  changeParchase = totalCurrent-totalParchase;
    const  changePercent = (totalCurrent-totalParchase)/totalParchase*100;
    const dispatch = useDispatch(); 

   /* useEffect(() => {
        const fetchData = async () => {
          walletCryptos.map(async (item) => {
            try {
              const newData = await fetchCrypto(item.id);
                  dispatch(setPriceCurrent({...item, priceCurrent:  newData.data.priceUsd}));
            } catch (error) {
              console.log(error);
            }
          })
        }
        fetchData();
      }, [])*/

        useEffect(() => {
        console.log(walletCryptos);
      }, [walletCryptos])
    
      const handleDelete =  (id) => {
        console.log(id)
        dispatch(deleteWalletCrypto(id));
      }
  
    const handleClose = () => {
        dispatch(setIsModalWalletOpen(false));
    }

    
const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Quantity',
        dataIndex: 'quantity',
        key: 'quantity',
    },
    {
        title: 'Purchase price ($)',
        dataIndex: 'price',
        key: 'price',
        render: (price) => (
            <p>{formatedPrice(price)} </p>
        )
    },
    {
        title: 'Current price ($)',
        dataIndex: 'priceCurrent',
        key: 'priceCurrent',
        render: (priceCurrent) => (
            <p>{formatedPrice(priceCurrent)} </p>
        )
    },
    {
        title: 'Change price(%)',
        dataIndex: '',
        key: 'change',
        render: (item) => (
            <span >{formatedPercent(((item.priceCurrent-item.price)/item.price)*100)} %</span>
           ),
    },
    {
        title: 'Delete',
        dataIndex: '',
        key: '',
        render: (row) => (
            <DeleteTwoTone style={{ fontSize: '20px' }} twoToneColor='#00B96B' onClick={() => handleDelete(row.id)} />
        )
    },
]


    return <div className="modal_wallet">
        <div className="modal_buy_title"> Wallet   </div>
        <CloseOutlined className="close_wallet_icon"
            style={{ fontSize: '20px', color: 'lightgray' }}
            onClick={handleClose} />
        <p></p>

        <ConfigProvider
            theme={{
                token: {
                    borderRadius: 2,
                    colorBgContainer: 'rgba(188, 253, 128, 0.1)',
                },
            }}
        >
             <Table className="wallet_table" dataSource={walletCryptos}
                columns={columns}
                rowKey="name"
                pagination={false}
            /> 
        </ConfigProvider>

        <p className="modal_wallet_total"> Total parchase: {formatedPrice(totalParchase)} $ </p>
        <p className="modal_wallet_total"> Total current:  {formatedPrice(totalCurrent)} $ </p>
        <div className="wallet_result"> 
           <p className="change_result"> {formatedPrice(totalParchase)} $ <img src={arrow}  className="arrow" alt='arrow'/> 
         {formatedPrice(totalCurrent)} $   </p>
         {walletCryptos.length>0 &&  <p className={changePercent>=0 ? "positive_percent change_percent" : "negative_percent change_percent"}>   
         ( {formatedPrice(changeParchase)} $  / {formatedPercent(changePercent)} %) 
            </p>  }
         </div>
    </div>

}

export default ModalWallet;