import React from 'react'
import {useState} from 'react'
import { Layout, Menu } from 'antd'
import { HashRouter, Switch, Route, Link, Redirect } from 'react-router-dom'

import Home from './components/home'
import Qkadmin from './components/qkadmin'
import Register from './components/register'
import Success from './components/register/Success'

import bgImage from './asset/image/bgImage.jpg'
import './asset/css/App.less'

const { Header, Content } = Layout;

const App = () => {
	let [select, setSelect] = useState(window.location.hash.split('/')[1])

	let Select = () => {
		setSelect(window.location.hash.split('/')[1])
	}

	return (
		<HashRouter>
			<Layout style={{height: '100%', background: 'none'}}>
				<Header id='app_header'>
					<div className='logo'>
						<img src='logo.png' width='40px' alt='logo' />
						QKTeam
					</div>
					<Menu mode='horizontal' id='app_menu' selectedKeys={select || 'home'} onSelect={Select}>
						<Menu.Item key='home'>
							<Link to="/home" >主页</Link>
						</Menu.Item>
						<Menu.Item key='register'>
							<Link to="/register" >报名</Link>
						</Menu.Item>
					</Menu>
				</Header>
				<Layout style={{marginTop: 64, height: '100%'}} id="app_body">
					<img src={bgImage} alt='bgImage' id='app_img' />
					<Content id='app_content'>
						<Switch>
							<Redirect exact from='/' to='/home' />
							<Route exact path='/home' >
								<Home selected={setSelect} />
							</Route>
							<Route path='/register'>
								<Register selected={setSelect} />
							</Route>
							<Route path='/qkadmin' >
								<Qkadmin selected={setSelect} />
							</Route>
							<Route path='/success' >
								<Success selected={setSelect} />
							</Route>
						</Switch>
					</Content>
					
					<footer id='app_footer'>晴空工作室&copy;2021 招新</footer>
				</Layout>

			</Layout>
		</HashRouter>
	);
}

export default App;
