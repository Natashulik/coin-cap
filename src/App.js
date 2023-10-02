import {  ConfigProvider, Input } from 'antd';
import React from 'react';
import { Route, Routes } from 'react-router';
import Main from './pages/Main';
import Crypto from './pages/Crypto';

const App = () => (
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: '#00B96B',
        borderRadius: 2,

        colorBgContainer: '#f6ffed',
      },
    }}
  >

    <div className='wrapper'> 
    <Routes>
          <Route path="/react-gh-pages" element={<Main />} />
          <Route path="/crypto" element={<Crypto />} />
      </Routes>
    </div>

  </ConfigProvider>
);

export default App;