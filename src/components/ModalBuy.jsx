import { Button, Form, Input, Typography } from 'antd';
import { useSelector, useDispatch } from "react-redux";
import { setCryptoQuantity } from "../redux/cryptoSlice";
import {  setWalletAmount, setWalletCryptos} from '../redux/walletSlice';
import { formatedPrice } from '../helpers/formatedData';
import {CloseOutlined} from "@ant-design/icons";
import { setIsModalBuyOpen } from '../redux/tableSlice';


const ModalBuy = () => {
    const {id,  name, priceUsd  } = useSelector(state => state.table.selectedCrypto);
    const cryptoQuantity = useSelector(state => state.crypto.cryptoQuantity);
    const walletAmount = useSelector(state => state.wallet.walletAmount);
   
    const dispatch= useDispatch();

    const handleCryptoChange = (event) => {
   dispatch(setCryptoQuantity(+event.target.value));
    }

    const onFinish = (values) => {
        dispatch(setWalletAmount(walletAmount + cryptoQuantity*priceUsd));
        dispatch(setWalletCryptos({id: id, name: name, quantity: cryptoQuantity, price: priceUsd}))
        dispatch(setCryptoQuantity(0));
        dispatch(setIsModalBuyOpen(false));
   };

   const onFinishFailed = (errorInfo) => {
       console.log("Failed:", errorInfo);
   };

   const handleClose = ()=> {
    dispatch(setIsModalBuyOpen(false));
   }

   const [form] = Form.useForm();
   const onReset = () => {
    form.resetFields();
  };

    return  <div className="modal_buy">
    <div className="modal_buy_title"> Buy <span className="modal_buy_name"> {name}</span></div>
    <CloseOutlined  className="close_icon"
       style={{ fontSize: '20px', color: 'lightgray'}}
       onClick={handleClose} />
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
            style={{ marginBottom: "10px" }} >
            <Input type="number" step={0.1} min={0} placeholder="Enter crypro's quantity"
            value={cryptoQuantity}
            onChange={handleCryptoChange} 
            />
        </Form.Item>

        <Form.Item  name="amount" 
            style={{ marginBottom: "10px"}} >
         <Typography.Text strong  style={{ fontFamily: "Open Sans", fontSize: "16px" }}
                > Amount is   <span style={{ color: '#00B96B' }}>
                 {formatedPrice(cryptoQuantity*priceUsd)}</span>  USD
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
            onClick={onReset}>
                Buy </Button>
        </Form.Item>
      
    </Form>
</div>

}

export default ModalBuy;