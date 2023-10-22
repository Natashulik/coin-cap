import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { fetchHistory } from "../helpers/fetchHistory";
import { setHistoryData, setInterval, setSelectedButton } from '../redux/cryptoSlice';

const Graph = () => {
  const { id } = useSelector(state => state.table.selectedCrypto);
  const { historyData, interval, selectedButton } = useSelector(state => state.crypto);
  const dispatch = useDispatch();

  const fetchData = async (interval) => {
    const res = await fetchHistory(id, interval);
    if (res.data !== historyData) {
      dispatch(setHistoryData(res.data));
    }
  }

  useEffect(() => {
    fetchData(interval);
  }, [id])

  const handleClickInterval = (interval, selectedButton) => {
    fetchData(interval);
    dispatch(setInterval(interval));
    dispatch(setSelectedButton(selectedButton));
  }

  let updatedHistory;
  if (selectedButton === '1H') {
    updatedHistory = historyData.slice(-60).map((item, index) => {
      let min = new Date(item.date).toLocaleTimeString('en-US', { hour: 'numeric', hour12: false, minute: 'numeric' });
      let price = Number(item.priceUsd).toFixed(3);
      return { priceUsd: price, date: min }
    });
  } else if (selectedButton === '24H') {
    updatedHistory = historyData.slice(-24 * 12).map((item, index) => {
      let hour = new Date(item.date).toLocaleTimeString('en-US', { hour: 'numeric', hour12: false, minute: 'numeric' });
      let price = Number(item.priceUsd).toFixed(3);
      return { priceUsd: price, date: hour }
    });
  } else if (selectedButton === '7D') {
    updatedHistory = historyData.slice(-7 * 24).map((item, index) => {
      let date = new Date(item.date).toLocaleDateString("en-US", { day: "numeric", month: 'short', hour: 'numeric' });
      let price = Number(item.priceUsd).toFixed(3);
      return { priceUsd: price, date: date }
    })
  } else if (selectedButton === '1M') {
    updatedHistory = historyData.slice(-30).map((item, index) => {
      let date = new Date(item.date).toLocaleDateString("en-US", { day: "numeric", month: 'short' });
      let price = Number(item.priceUsd).toFixed(3);
      return { priceUsd: price, date: date }
    })
  } else if (selectedButton === '1Y') {
    updatedHistory = historyData.map((item, index) => {
      let month = new Date(item.date).toLocaleDateString("en-US", { day: "numeric", month: 'short' });
      let price = Number(item.priceUsd).toFixed(3);
      return { priceUsd: price, date: month }
    });
  }

  return <div className='graph_block'>
    <div className='switch_interval'>
      <div className={selectedButton === '1H' ? 'switch_button active' : 'switch_button'}
        onClick={() => handleClickInterval('m1', '1H')} > 1H </div>
      <div className={selectedButton === '24H' ? 'switch_button active' : 'switch_button'}
        onClick={() => handleClickInterval('m5', '24H')} > 24H </div>
      <div className={selectedButton === '7D' ? 'switch_button active' : 'switch_button'}
        onClick={() => handleClickInterval('h1', '7D')}> 7D </div>
      <div className={selectedButton === '1M' ? 'switch_button active' : 'switch_button'}
        onClick={() => handleClickInterval('d1', '1M')}> 1M </div>
      <div className={selectedButton === '1Y' ? 'switch_button active' : 'switch_button'}
        onClick={() => handleClickInterval('d1', '1Y')}> Y </div>
    </div>

    <ResponsiveContainer width="100%" aspect={2}>
      <LineChart width={550} height={350} data={updatedHistory}
        dot={{ stroke: 'red', strokeWidth: 2 }} >
        <CartesianGrid stroke="lightgray" strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis dataKey={parseFloat("priceUsd")} tickCount={7} domain={['auto', 'auto']} />
        <Line type="monotone" dataKey="priceUsd" stroke="red" dot={false} />
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
  </div>
}

export default Graph;