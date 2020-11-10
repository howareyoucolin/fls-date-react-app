import React from 'react';
import ReactDOM from 'react-dom';

import axios from 'axios';

import '~/src/scss/component-member-detail.scss';

class MemberDetail extends React.Component {
	
	constructor(props) {
    super(props);
    this.state = {
			member: {}
		};
  }
	
	componentDidMount() {
    axios.get('https://api.369usa.com/member/?id='+this.props.id)
      .then(res => {
        const member = res.data;
        this.setState({ member });
      })
  }
	
	render() {
		
		let superTitle = this.state.member.superTitle;
		let imageUrl = this.state.member.imageUrl;
		let name = this.state.member.name;
		let gender = this.state.member.gender;
		let oppositeGender = this.state.member.oppositeGender;
		let age = this.state.member.age;
		let wechat = this.state.member.wechat;
		let email = this.state.member.email;
		let phone = this.state.member.phone;
		let content = this.state.member.content;
		let aboutMe = this.state.member.aboutMe;
		let preference = this.state.member.preference;
		
		return (
			<div className="memberDetail">
				<h2>{superTitle}</h2>
				<div className="profile">
					<img src={imageUrl} alt={superTitle} />
					<div>
						<p>名字: {name}</p>
						<p>性别: {gender}</p>
						<p>年龄: {age}</p>
						<p>微信: {wechat ? <b>{wechat}</b> : <span>未填写</span>}</p>
						<p>电邮: {email || <span>未填写</span>}</p>
						<p>手机: {phone || <span>未填写</span>}</p>
					</div>
				</div>

				<div>
					{
						content ? 
						<div dangerouslySetInnerHTML={{ __html: content }}></div>
						:
						<div>
							{
								aboutMe &&
								<>
									<h3>基本资料</h3>
									<div dangerouslySetInnerHTML={{ __html: aboutMe }}></div>
								</>
							}
							{
								preference &&
								<>
									<h3>喜欢什么样的{oppositeGender}</h3>
									<div dangerouslySetInnerHTML={{ __html: preference }}></div>
								</>
							}
						</div>
					}
				</div>
			</div>
		)
	}
};

export default MemberDetail;