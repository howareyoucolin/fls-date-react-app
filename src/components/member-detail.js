import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {fetchMember} from '~/src/actions/memberActions'
import {unEscapeLineBreak} from '~/src/includes/functions'
import BreadCrumbs from '~/src/modules/breadcrumbs'
import '~/src/scss/component-member-detail.scss'

const MemberDetail = (props) => {
	
	useEffect(() => {
		props.initMember(props.id)
  }, [])
	
	let {
				superTitle, 
				imageUrl, 
				name, 
				gender,
				oppositeGender,				
				age,
				wechat,
				email,
				phone,
				content,
				aboutMe,
				preference
			} = props.member
	
	return (
		<div className="memberDetail">
		
			<BreadCrumbs 
				items={[
					{label:superTitle}
				]}
			/>
		
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
								<div>{unEscapeLineBreak(aboutMe)}</div>
							</>
						}
						{
							preference &&
							<>
								<h3>喜欢什么样的{oppositeGender}</h3>
								<div>{unEscapeLineBreak(preference)}</div>
							</>
						}
					</div>
				}
			</div>
		</div>
	)

};

const mapStateToProps = state => {
  return {
    member: state.members.member
  }
}

const mapDispatchToProps = dispatch => {
  return {
    initMember: (id) => dispatch(fetchMember(id))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MemberDetail)