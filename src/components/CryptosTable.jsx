import React from "react";
import { Button, Table } from "antd";
import { fetchAllCryptos } from "../helpers/fetchAllCryptos";
import { useSelector, useDispatch } from "react-redux";
import { setCryptos } from "../redux/tableSlice";
import { useEffect } from "react";
import CryptoItem from "./CryptoItem";

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

  
      return <div >
      {cryptos.map((item, index) => (
      <CryptoItem  key={item.id} crypto={item}/>
       ))}    
    </div>

}


export default CryptosTable;