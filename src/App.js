import React from 'react'
import {useEffect, useState} from 'react'
import { Layout, Menu } from 'antd'
import { BrowserRouter, Switch, Route, Link, Redirect } from 'react-router-dom'

import Home from './components/home'
import Qkadmin from './components/qkadmin'
import Register from './components/register'
import Success from './components/register/Success'

import bgImage from './asset/image/bgImage.jpg'
import logo from './asset/image/logo.png'
import './asset/css/App.css'

const { Header, Content } = Layout;

const App = () => {
	let [select, setSelect] = useState(window.location.pathname)

	let Select = () => {
		setSelect(window.location.pathname)
	}

	return (
		<BrowserRouter>
			<Layout style={{height: '100%', background: 'none'}}>
				<Header id='app_header'>
					<div className='logo'>
						<img src={logo} width='40px' />
						QKTeam
					</div>
					<Menu mode='horizontal' id='app_menu' selectedKeys={select} onSelect={Select}>
						<Menu.Item key='/home'>
							<Link to="/home" >主页</Link>
						</Menu.Item>
						<Menu.Item key='/register'>
							<Link to="/register" >报名</Link>
						</Menu.Item>
						{/* <Menu.Item key='/qkadmin'>
							<Link to="/qkadmin" >qkadmin</Link>
						</Menu.Item> */}
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
							<Route path='/register' component={Register} />
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
		</BrowserRouter>
	);
}

export default App;
