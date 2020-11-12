import React from 'react'
import {Link} from 'react-router-dom'
import '~/src/scss/module-member.scss'

const MemberCard = (props) => {

	let {
				id,
				name,
				intro,
				wechat,
				age,
				gender,
				imageUrl,
				imageAlt
			} = props.member

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

export default MemberCard;