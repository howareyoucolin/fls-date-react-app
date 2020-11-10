import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from "react-router-dom";

import '~/src/scss/component-header.scss';

class Header extends React.Component {
	
	render() {
		return (
			<div className="header">
				<div className="container">
					<h1><Link to='/'>纽约同城交友</Link></h1>
					<a className="signup" href={this.baseUrl+'signup'}>注册<span>会员</span></a>
					<a className="signin" href={this.baseUrl+'login'}>登陆</a>
				</div>
			</div>
		)
	}
};

export default Header;