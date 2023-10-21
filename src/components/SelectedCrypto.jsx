import { Button, Form, Input, Typography } from 'antd';
import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { setCryptoQuantity } from "../redux/cryptoSlice";
import { setWalletAmount, setWalletCryptos} from "../redux/walletSlice";
import { formatedPrice } from '../helpers/formatedData';
import { loadSelectedCrypto, saveWalletCryptos } from '../helpers/localStorage';
import { setSelectedCrypto } from '../redux/tableSlice';


const SelectedCrypto = () => {
    const { id, name, symbol, priceUsd  } = useSelector(state => state.table.selectedCrypto);
    const cryptoQuantity = useSelector(state => state.crypto.cryptoQuantity);
    const walletCryptos = useSelector(state => state.wallet.walletCryptos);
    const walletAmount = useSelector(state => state.wallet.walletAmount);
    const amount = formatedPrice(cryptoQuantity*priceUsd);
   
    const dispatch= useDispatch();
  
   const handleCryptoChange = (event) => {
   dispatch(setCryptoQuantity(+event.target.value));

    }

    useEffect(() => {
        const savedSelectedCrypto= loadSelectedCrypto();
         dispatch(setSelectedCrypto(savedSelectedCrypto))
       }, [])

    const onFinish = (values) => {
      dispatch(setWalletAmount(walletAmount + cryptoQuantity*priceUsd));
      dispatch(setWalletCryptos({id: id, name: name, quantity: cryptoQuantity, price: priceUsd}))
      dispatch(setCryptoQuantity(0))

       
      const existingCrypto = walletCryptos.find(crypto => crypto.id === id);
      if (existingCrypto) {
          const updatedWalletCryptos = [...walletCryptos];
            const updatedCrypto = {...existingCrypto, quantity: existingCrypto.quantity + cryptoQuantity};
               updatedWalletCryptos[walletCryptos.indexOf(existingCrypto)] = updatedCrypto;
              saveWalletCryptos(updatedWalletCryptos);
     } else  saveWalletCryptos([...walletCryptos, {id: id, name: name, quantity: cryptoQuantity, price: priceUsd} ]);
     
       };

   const onFinishFailed = (errorInfo) => {
       console.log("Failed:", errorInfo);
   };

   const [form] = Form.useForm();
   const onReset = () => {
    form.resetFields();
  };
    return <div className="selected_crypto">
        <div className="selected_title">
            <span className="selected_name">{name}</span>
            <span className="selected_symbol">{symbol}</span>
        </div>
  
        <Form
            name="basic"
            style={{
                maxWidth: 600               
            }}
            labelCol={{
                span: 12
            }}
            wrapperCol={{
                span: 24
            }}
            form={form}
            layout="vertical"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item  name="quantity"
                style={{ marginBottom: "10px" }}  >
                <Input type="number" step={0.1} min={0} placeholder="Enter crypro's quantity"
                value={cryptoQuantity}
                 onChange={handleCryptoChange} 
            />
            </Form.Item>

            <Form.Item  name="amount" 
                style={{ marginBottom: "10px"}} >
             <Typography.Text strong  style={{ fontFamily: "Open Sans", fontSize: "18px" }}
                    > Amount is   <span style={{ color: '#00B96B' }}>
                     {amount}</span>  USD
             </Typography.Text>
            </Form.Item>
            
            <Form.Item
              
                style={{ marginBottom: "10px" }}
            >
                <Button type="primary" htmlType="submit" 
                style={{ width: "100px", fontFamily: "Open Sans", fontSize: "16px", paddingTop: "0",
                borderRadius: "4px", marginBottom: "5px", marginLeft: "130px"  }} 
                onClick={onReset}
              >
                    Buy </Button>
            </Form.Item>
          
        </Form>
    </div>
}

export default SelectedCrypto;  

