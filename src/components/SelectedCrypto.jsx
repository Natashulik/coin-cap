import { Button, Form, Input, Typography } from 'antd';
import { useSelector, useDispatch } from "react-redux";
import { setCryptoQuantity, setWalletAmount } from "../redux/cryptoSlice";
import { formatedPrice } from '../helpers/formatedData';

const SelectedCrypto = () => {
    const { name, symbol, priceUsd  } = useSelector(state => state.table.selectedCrypto);
    const cryptoQuantity = useSelector(state => state.crypto.cryptoQuantity);
    const walletAmount = useSelector(state => state.crypto.walletAmount);
    const amount = formatedPrice(cryptoQuantity*priceUsd);
   
    const dispatch= useDispatch();
  
   const handleCryptoChange = (event) => {
   dispatch(setCryptoQuantity(+event.target.value));
   console.log(cryptoQuantity);
    }

    const onFinish = (values) => {
      dispatch(setWalletAmount(walletAmount + cryptoQuantity*priceUsd));
      dispatch(setCryptoQuantity(0))
   
      console.log(cryptoQuantity);
      console.log(values);
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
                wrapperCol={{
                    offset: 9,
                    span: 16
                }}
                style={{ marginBottom: "10px" }}
            >
                <Button type="primary" htmlType="submit" 
                style={{ width: "100px", fontFamily: "Open Sans", fontSize: "16px", paddingTop: "0",
                borderRadius: "4px", marginBottom: "5px"  }} 
                onClick={onReset}
              >
                    Buy </Button>
            </Form.Item>
          
        </Form>
    </div>
}

export default SelectedCrypto;  



/*const SelectedCrypto = () => {
    const { name, symbol, priceUsd  } = useSelector(state => state.table.selectedCrypto);
    const cryptoQuantity = useSelector(state => state.crypto.cryptoQuantity);
    const walletAmount = useSelector(state => state.crypto.walletAmount);
    const amount = formatedPrice(cryptoQuantity*priceUsd);
    const dispatch= useDispatch();
  
    const handleCryptoChange = (event) => {
   dispatch(setCryptoQuantity(+event.target.value));
    }

    const onFinish = (values) => {
        dispatch(setWalletAmount(walletAmount + cryptoQuantity*priceUsd));
        dispatch(setCryptoQuantity(0));
   };

     return <div className="selected_crypto">
             <span >{name}</span>
        <Form name="basic" onFinish={onFinish} >
            <Form.Item  name="quantity"
                <Input type="number" placeholder="Enter crypro's quantity"
                value={cryptoQuantity}
                onChange={handleCryptoChange}  />
            </Form.Item>

            <Form.Item  name="amount"  >
             <Typography.Text> Amount is {amount} USD </Typography.Text>
            </Form.Item>
            <Button type="primary" htmlType="submit" >  Buy </Button>
        </Form>
    </div>
}*/
