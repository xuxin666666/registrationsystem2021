import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import axios from 'axios'
import 'antd/dist/antd.less';

axios.defaults.baseURL = ''

ReactDOM.render(
//   <React.StrictMode>
    <App />,
//   </React.StrictMode>,
  document.getElementById('root')
);
