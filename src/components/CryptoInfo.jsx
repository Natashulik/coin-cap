import React from 'react';
import { Col, Divider, Row } from 'antd';
import { useSelector } from 'react-redux';
import { formatedPrice, formatedMillion, formatedPercent} from '../helpers/formatedData';
import { Link } from 'react-router-dom';

const style1 = {
  background: 'rgba(215, 255, 211, 0.4)',
  padding: '8px 5px',
  fontSize: '15px'
 };

 const style2 = {
    padding: '8px 5px',
    fontSize: '15px'
   };

const CryptoInfo = () => {
    const { priceUsd, changePercent24Hr, marketCapUsd, maxSupply,
       supply, volumeUsd24Hr, vwap24Hr, explorer:site  } = useSelector(state => state.table.selectedCrypto);

    return <div className='info_table' >
     <Divider orientation="left" className='divider' style={{fontSize: '20px', marginTop: '0px'}}>Cryptocurrency information</Divider>
     <Row >
      <Col span={12}>  <div style={style1}>Price</div></Col>
      <Col span={12}><div style={style1}>{formatedPrice(priceUsd)} $</div></Col>
      <Col span={12}><div style={style2}>Change % (24h) </div></Col>
      <Col span={12}><div style={style2}>{formatedPercent(changePercent24Hr)} % </div></Col>
      <Col span={12}><div style={style1}>Market cap</div></Col>
      <Col span={12}><div style={style1}>{formatedMillion(marketCapUsd)}m $ </div></Col>
      <Col span={12}><div style={style2}>Supply</div></Col>
      <Col span={12}><div style={style2}>{formatedMillion(supply)}m $ </div></Col>
      <Col span={12}><div style={style1}>Max supply</div></Col>
      <Col span={12}><div style={style1}>{formatedMillion(maxSupply)}m $ </div></Col>
      <Col span={12}><div style={style2}>Volum USD (24H)</div></Col>
      <Col span={12}><div style={style2}>{formatedMillion(volumeUsd24Hr)}m $</div></Col>
      <Col span={12}><div style={style1}>VWAP (24H)</div></Col>
      <Col span={12}><div style={style1}>{formatedPrice(vwap24Hr)} $</div></Col>
          
    </Row>
     </div>
}

/*changePercent24Hr"-2.3087982229661712" +
explorer: "https://blockchain.info/"
id: "bitcoin" +
marketCapUsd: "528103411406.3876487421949385" +
maxSupply: "21000000.0000000000000000"+
name: "Bitcoin"+
priceUsd: "27067.8774747144372105"+
rank: "1"
supply: "19510337.0000000000000000"+
symbol: "BTC"
volumeUsd24Hr: "3392538410.9169407687883476"
vwap24Hr: "27400.8921004413405808"*/
export default CryptoInfo;