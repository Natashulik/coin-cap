import { Form, Input } from 'antd';
import { SearchOutlined, CloseOutlined } from '@ant-design/icons';
import { setInputText, setFiltredCryptos, setIsFiltered } from '../redux/tableSlice';
import { useSelector, useDispatch } from 'react-redux';

const Search = () => {
  const { inputText, cryptos, isFiltered } = useSelector(state => state.table);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(setInputText(event.target.value));
  }

  const handleClickSearch = () => {
    const updatedCryptos = cryptos.filter(item => item.name.toLowerCase().includes(inputText.toLowerCase()));
    dispatch(setIsFiltered(true));
    dispatch(setFiltredCryptos(updatedCryptos));
  }

  const handleClickClose = () => {
    dispatch(setIsFiltered(false));
    dispatch(setFiltredCryptos([]));
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleClickSearch();
    }
  }

  return <div className="search_block">
    <Form className='input_form'
      name="basic"
      style={{
        maxWidth: 600
      }}
      wrapperCol={{
        span: 24
      }}
      layout="vertical"
      autoComplete="off"
    >
      <Form.Item name="quantity" className='search_item' >
        <Input placeholder="Search for a crypto"
          className='search_input'
          value={inputText}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          suffix={isFiltered ? <CloseOutlined style={{ color: 'gray', fontSize: '22px' }} onClick={handleClickClose} /> :
            <SearchOutlined style={{ color: 'gray', fontSize: '22px' }} onClick={handleClickSearch} />
          }
        />
      </Form.Item>
    </Form>
  </div>
}

export default Search;
