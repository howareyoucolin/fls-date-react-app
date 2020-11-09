import React from 'react';
import ReactDOM from 'react-dom';

import '../scss/module-member.scss';

class Member extends React.Component {
	
	componentWillMount() {
		this.baseUrl = '//'+window.location.hostname+'/';
	}
	
	render() {
		
		let memberUrl = this.baseUrl+'member/'+this.props.id;
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
					<a href={memberUrl}>
						<img src={imageUrl} alt={imageAlt} />
					</a>
					<div>
						<p>
							{name} , {age} , {gender}<br/>
							{
								wechat && 
									<>微信: <b>{wechat}</b><br/></>
							}
						</p>
						<p className="intro">
							{intro} ...
							<a href={memberUrl}>[更多]</a>
						</p>
					</div>
				</div>
				<p className="intro">
						{intro} ...
						<a href={memberUrl}>[更多]</a>
				</p>
			</div>
		)
	}
};

export default Member;