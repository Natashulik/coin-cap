import React from "react";
import {Table, ConfigProvider } from "antd";
import { fetchAllCryptos } from "../helpers/fetchAllCryptos";
import { useSelector, useDispatch } from "react-redux";
import { setCryptos } from "../redux/tableSlice";
import { useEffect } from "react";
import Icon from "react-crypto-icons";
import { formatedPrice, formatedPercent,formatedBillion} from "../helpers/formatedData";
import {PlusSquareTwoTone} from "@ant-design/icons";

const columns = [
  {
    title: '№',
    dataIndex: 'rank',
    key: 'rank',
    sorter: (a,b) => a.rank -b.rank,
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
    )},
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
    )
  },
  {
    title: 'VWAP(24Hr)',
    dataIndex: 'vwap24Hr',
    key: 'vwap24Hr',
    sorter: (a,b) => a.vwap24Hr -b.vwap24Hr,
    render: (price) => (
      <p>{formatedPrice(price)} $</p>
    )
  },
  {
    title: 'Change (24h)',
    dataIndex: 'changePercent24Hr',
    key: 'change24',
    render: (change24) => (
      change24<0 ? 
        <p className="negative_percent">{formatedPercent(change24)} %</p> :
        <p className="positive_percent">{formatedPercent(change24)} %</p>
     )
  },
  {
    title: 'Market Cap',
    dataIndex: 'marketCapUsd',
    key: 'marketcap',
    sorter: (a,b) => a.marketCapUsd -b.marketCapUsd,
    render: (marketcap) => (
      <p>{formatedBillion(marketcap)}b $</p>
    )
  },
  {
    title: 'Byu',
    dataIndex: '',
    key: '',
    render: () => (
      <PlusSquareTwoTone style={{ fontSize: '20px'}} twoToneColor='#00B96B'/>
    )
  },


];

const CryptosTable = () => {
  const cryptos = useSelector(state => state.table.cryptos);
  const dispatch = useDispatch();

      const fetchData = async () => {
        const res = await fetchAllCryptos(); 
        dispatch(setCryptos(res.data));
          console.log(res.data);        
      } 
    
      useEffect(() => {
           fetchData();
      }, [])

      const handleRowClick = (row) => {
 console.log(row);
      }
  
      return <div >
  <Table dataSource={cryptos}
         columns={columns}
         rowKey="id"
         onRow = {(row, rowIndex)=> {
    return {onClick: ()=> handleRowClick(row)}
  }} />
    </div>
}


export default CryptosTable;