import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from "react-router-dom";

import '~/src/scss/module-member.scss';

class Member extends React.Component {
	
	render() {

		let id = this.props.id;
		let name = this.props.name;
		let intro = this.props.intro;
		let wechat = this.props.wechat;
		let age = this.props.age;
		let gender = this.props.gender;
		let imageUrl = this.props.imageUrl;
		let imageAlt = this.props.superTitle;
		
		return (
			<div className="member">
				<div className="wrap">
					<Link to={'member/'+id}>
						<img src={imageUrl} alt={imageAlt} />
					</Link>
					<div>
						<p>
							{name} , {age} , {gender}<br/>
							{
								wechat && 
									<>微信: <b>{wechat}</b><br/></>
							}
						</p>
						<p className="intro">
							{intro} ... <br/>
							<Link to={'member/'+id}>[查看资料]</Link>
						</p>
					</div>
				</div>
				<p className="intro">
						{intro} ... <br/>
						<Link to={'member/'+id}>[查看资料]</Link>
				</p>
			</div>
		)
	}
};

export default Member;