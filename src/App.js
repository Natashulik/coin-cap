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
        colorBgContainer: 'rgba(215, 255, 211, 0.4)',
      },
    }}
  >
     <Routes>
          <Route path="/coincap" element={<Main />} />
          <Route path="/crypto" element={<Crypto />} />
      </Routes>
    

  </ConfigProvider>
);

export default App;
