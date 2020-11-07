import React from 'react';
import ReactDOM from 'react-dom';

class Header extends React.Component {
	render() {
		return (
			<div className="header">
				<div className="container">
					<h1><a href="https://www.flushingdating.com">纽约同城交友</a></h1>
					<a className="signup" href="https://www.flushingdating.com/signup">注册<span>会员</span></a>
					<a className="signin" href="https://www.flushingdating.com/login">登陆</a>
				</div>
			</div>
		)
	}
};

export default Header;