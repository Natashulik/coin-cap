import React from "react";
import {Table, ConfigProvider } from "antd";
import { fetchAllCryptos } from "../helpers/fetchAllCryptos";
import { useSelector, useDispatch } from "react-redux";
import { setCryptos } from "../redux/tableSlice";
import { useEffect } from "react";
import Icon from "react-crypto-icons";
import { formatedPrice, formatedPercent,formatedMillion} from "../helpers/formatedData";
import {PlusSquareTwoTone} from "@ant-design/icons";
import { useNavigate } from "react-router";
import { setSelectedCrypto, setIsModalBuyOpen } from "../redux/tableSlice";
import { saveSelectedCrypto } from "../helpers/localStorage";


const CryptosTable = () => {
  const cryptos = useSelector(state => state.table.cryptos);
  const selectedCrypto = useSelector(state => state.table.selectedCrypto);
  const filtredCryptos = useSelector(state => state.table.filtredCryptos);
  const isFiltered = useSelector(state => state.table.isFiltered);
  const dispatch = useDispatch();

   const fetchData = async () => {
        const res = await fetchAllCryptos(); 
        dispatch(setCryptos(res.data));
   } 
    
      useEffect(() => {
           fetchData();
      }, [])

      const navigate = useNavigate();


         const handleRowClick = (row, event) => {
           dispatch(setSelectedCrypto(row))
           saveSelectedCrypto(row);
            navigate("/crypto");
          }

         const handleIconClick =(row, event) =>{
          event.stopPropagation();
     
          dispatch(setSelectedCrypto(row))
          dispatch(setIsModalBuyOpen(true));
        }
        
        const columns = [
          {
            title: '№',
            dataIndex: 'rank',
            key: 'rank',
            sorter: (a,b) => a.rank -b.rank,
            responsive: ['sm', 'md', 'lg', 'xl', 'xxl']
          },
          {
            title: 'Symbol',
            dataIndex: 'symbol',
            key: 'symbol',
            sorter: (a,b) => a.symbol.localeCompare(b.symbol),
            render: (symbol) => (
              <>
                  <Icon name={symbol.toLowerCase()} size={20} className="crypto_icon"/>
                  <span >{symbol}</span>
              </>
            ),
            responsive: ['lg', 'xl', 'xxl']
          },
           {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            sorter: (a,b) => a.name.localeCompare(b.name)
          },
          {
            title: 'Price',
            dataIndex: 'priceUsd',
            key: 'price',
            sorter: (a,b) => a.priceUsd -b.priceUsd,
            render: (price) => (
              <p>{formatedPrice(price)} $</p>
            ),
            responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl']
          },
          {
            title: 'VWAP(24Hr)',
            dataIndex: 'vwap24Hr',
            key: 'vwap24Hr',
            sorter: (a,b) => a.vwap24Hr -b.vwap24Hr,
            render: (price) => (
              <p>{formatedPrice(price)} $</p>
            ),
            responsive: ['md', 'lg', 'xl', 'xxl']
          },
          {
            title: 'Change (24h)',
            dataIndex: 'changePercent24Hr',
            key: 'change24',
            render: (change24) => (
              change24<0 ? 
                <p className="negative_percent">{formatedPercent(change24)} %</p> :
                <p className="positive_percent">{formatedPercent(change24)} %</p>
             ),
             responsive: ['sm', 'md', 'lg', 'xl', 'xxl']
          },
          {
            title: 'Market Cap',
            dataIndex: 'marketCapUsd',
            key: 'marketcap',
            sorter: (a,b) => a.marketCapUsd -b.marketCapUsd,
            render: (marketcap) => (
              <p>{formatedMillion(marketcap)}m $</p>
            ),
            responsive: ['lg', 'xl', 'xxl']
          },
          {
            title: 'Byu',
            dataIndex: '',
            key: '',
            render: (row) => (
              <PlusSquareTwoTone style={{ fontSize: '20px'}} twoToneColor='#00B96B' onClick={event => handleIconClick( row, event)}/>
            ),
            responsive: [ 'xs', 'sm', 'md', 'lg', 'xl', 'xxl']
          },
        ];

      return <div >
        <ConfigProvider
        theme={{
            token: {
                borderRadius: 2,
                colorBgContainer: 'rgba(188, 253, 128, 0.1)',
              },
        }}
      >
            <Table dataSource={ isFiltered && filtredCryptos.length > 0 ? filtredCryptos : 
                                isFiltered && filtredCryptos.length === 0 ?  []: 
                                cryptos}
         columns={columns}
         rowKey="id"
         onRow={(row) => ({
          onClick: (event) =>  handleRowClick(row, event)
        })} 
        responsive={{
          xs: false, // не показывать на мобильных устройствах
          sm: true, // показывать на устройствах с шириной экрана от 576px до 768px
          md: true, // показывать на устройствах с шириной экрана от 768px до 992px
          lg: true, // показывать на устройствах с шириной экрана от 992px до 1200px
          xl: true, // показывать на устройствах с шириной экрана от 1200px и выше
          xxl: true, // показывать на устройствах с шириной экрана от 1600px и выше
        }}
        />
         </ConfigProvider>

    </div>
}


export default CryptosTable;