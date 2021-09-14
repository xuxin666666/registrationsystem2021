import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import axios from 'axios'
import 'antd/dist/antd.less';

axios.defaults.baseURL = 'http://47.106.218.69:8080'
axios.interceptors.request.use(config => {
	config.headers['Content-Type'] = 'application/json'
	// config.headers['Access-Control-Allow-Methods'] = 'POST, GET'
	return config
})

ReactDOM.render(
	//   <React.StrictMode>
	<App />,
	//   </React.StrictMode>,
	document.getElementById('root')
);
