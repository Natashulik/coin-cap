import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import {fetchHistory  } from "../helpers/fetchHistory";
import { setHistoryData } from '../redux/cryptoSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { formatedPrice } from '../helpers/formatedData';

const Graph= () => {
    const { id }  = useSelector(state => state.table.selectedCrypto);
    const historyData  = useSelector(state => state.crypto.historyData);
    const dispatch = useDispatch();

    const fetchData = async () => {
        const res = await fetchHistory(id); 
        dispatch(setHistoryData(res.data));
      } 

      useEffect(() => {
        fetchData();
     }, [id])

     const last24HoursData =  historyData.slice(-24).map((item, index)=>{
        let hour = new Date(item.date).toLocaleString('en-US', { hour: 'numeric', hour12: true, timeZone: 'UTC' });
        let price = Number(item.priceUsd).toFixed(2);
           return {priceUsd: price, date: hour}
     })
 
   return  <div className='graph_block'>        <LineChart width={550} height={350} data={last24HoursData}
        dot={{ stroke: 'red', strokeWidth: 2 }}
         >
           <CartesianGrid stroke="lightgray" strokeDasharray="3 3" />
    <XAxis dataKey="date" />
    <YAxis dataKey={parseFloat("priceUsd")} tickCount={7}  domain={['auto', 'auto']}
    />
      
    <Line type="monotone" dataKey="priceUsd" stroke="red" />
    <Tooltip />
  </LineChart>
        </div>
}

export default Graph;