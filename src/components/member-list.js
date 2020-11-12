import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {fetchMembers} from '~/src/actions/memberActions'
import MemberCard from '~/src/modules/memberCard'

const MemberList = (props) => {
	
	useEffect(() => {
		props.initMembers()
  }, [])
	
	const membersList = props.members.map((member) =>
		<MemberCard key={member.id} member={member} />
	)
	
	return (
		<div className="memberList">
			{membersList}
		</div>
	)
	
}

const mapStateToProps = state => {
  return {
    members: state.members.members
  }
}

const mapDispatchToProps = dispatch => {
  return {
    initMembers: () => dispatch(fetchMembers())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MemberList)