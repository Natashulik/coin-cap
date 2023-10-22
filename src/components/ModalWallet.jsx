import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { Table, ConfigProvider } from "antd";
import { CloseOutlined, DeleteTwoTone } from "@ant-design/icons";
import { setIsModalWalletOpen, deleteWalletCrypto } from "../redux/walletSlice";
import { formatedPrice, formatedPercent } from "../helpers/formatedData";
import arrow from "../assets/arrow3.png";
import { saveWalletCryptos } from "../helpers/localStorage";

const ModalWallet = () => {
  const walletCryptos = useSelector(state => state.wallet.walletCryptos);
  const totalParchase = walletCryptos.reduce((sum, item) => sum + Number(item.price) * item.quantity, 0)
  const totalCurrent = walletCryptos.reduce((sum, item) => sum + Number(item.priceCurrent) * item.quantity, 0)
  const changeParchase = totalCurrent - totalParchase;
  const changePercent = (totalCurrent - totalParchase) / totalParchase * 100;
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(walletCryptos);
  }, [walletCryptos])

  const handleDelete = (id) => {
    dispatch(deleteWalletCrypto(id));
    saveWalletCryptos(walletCryptos.filter(item => item.id !== id));
  }

  const handleClose = () => {
    dispatch(setIsModalWalletOpen(false));
  }

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl']
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
      responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl']
    },
    {
      title: 'Purchase price ($)',
      dataIndex: 'price',
      key: 'price',
      render: (price) => (
        <p>{formatedPrice(price)} </p>
      ),
      responsive: ['sm', 'md', 'lg', 'xl', 'xxl']
    },
    {
      title: 'Current price ($)',
      dataIndex: 'priceCurrent',
      key: 'priceCurrent',
      render: (priceCurrent) => (
        <p>{formatedPrice(priceCurrent)} </p>
      ),
      responsive: ['sm', 'md', 'lg', 'xl', 'xxl']
    },
    {
      title: 'Change price(%)',
      dataIndex: '',
      key: 'change',
      render: (item) => (
        <span >{formatedPercent(((item.priceCurrent - item.price) / item.price) * 100)} %</span>
      ),
      responsive: ['xl', 'xxl']
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
    <ConfigProvider
      theme={{
        token: {
          borderRadius: 2,
          colorBgContainer: 'rgba(188, 253, 128, 0.1)',
        },
      }} >
      <Table className="wallet_table" dataSource={walletCryptos}
        columns={columns}
        rowKey="name"
        pagination={false}
        responsive={{
          xs: false,
          sm: true,
          md: true,
          xl: true,
          xxl: true,
        }}
      />
    </ConfigProvider>

    {totalParchase ? <p className="modal_wallet_total"> Total parchase: {formatedPrice(totalParchase)} $ </p> :
      <p className="modal_wallet_total"> Total parchase: 0 $ </p>}
    {totalCurrent ? <p className="modal_wallet_total"> Total current:  {formatedPrice(totalCurrent)} $ </p> :
      <p className="modal_wallet_total"> Total current: 0 $ </p>}

    {totalParchase ? <div className="wallet_result">
      {totalParchase && totalCurrent && <p className="change_result"> {formatedPrice(totalParchase)} $ <img src={arrow} className="arrow" alt='arrow' />
        {formatedPrice(totalCurrent)} $   </p>}
      {changePercent && changeParchase && <p className={changePercent >= 0 ? "positive_percent change_percent" : "negative_percent change_percent"}>
        ( {formatedPrice(changeParchase)} $  / {formatedPercent(changePercent)} %)
      </p>}
    </div> : null}
  </div>
}

export default ModalWallet;