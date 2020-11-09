import React from 'react';
import ReactDOM from 'react-dom';

import '~/src/scss/component-header.scss';

class Header extends React.Component {
	
	componentDidMount() {
		this.baseUrl = '//'+window.location.hostname+'/';
	}
	
	render() {
		return (
			<div className="header">
				<div className="container">
					<h1><a href={this.baseUrl}>纽约同城交友</a></h1>
					<a className="signup" href={this.baseUrl+'signup'}>注册<span>会员</span></a>
					<a className="signin" href={this.baseUrl+'login'}>登陆</a>
				</div>
			</div>
		)
	}
};

export default Header;