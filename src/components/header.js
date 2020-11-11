import React from 'react';
import ReactDOM from 'react-dom';

import '~/src/scss/component-header.scss';

class Header extends React.Component {
	
	render() {
		return (
			<div className="header">
				<div className="container">
					<h1><a href='/'>纽约同城交友</a></h1>
					<a className="signup" href='/signup'>注册<span>会员</span></a>
					<a className="signin" href='/login'>登陆</a>
				</div>
			</div>
		)
	}
};

export default Header;