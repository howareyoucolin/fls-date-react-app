import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {useParams} from 'react-router-dom'
import {getExcerpt, seo} from '~/src/includes/functions'
import {initMember} from '~/src/actions/memberActions'
import Header from '~/src/components/header'
import MemberDetail from '~/src/components/member-detail'
import Footer from '~/src/components/footer'

const MemberPage = (props) => {
	
	const {id} = useParams()
	
	useEffect(() => {
		props.initMember(id)
  }, [id])
	
	useEffect(() => {
		let {superTitle, name, intro, aboutMe} = props.member
		if(typeof superTitle !== 'undefined'){
			seo({
				title: superTitle || name,
				description: intro || getExcerpt(aboutMe, 120)
			});
		}
  }, [props.member])
	
	return (
		<>
			<Header />
			<div className="main">
				<div className="container">
					<MemberDetail id={id} />
				</div>
			</div>
			<Footer />
		</>
	)
	
};

const mapStateToProps = state => {
  return {
    member: state.members.member
  }
}

const mapDispatchToProps = dispatch => {
  return {
    initMember: (id) => dispatch(initMember(id))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MemberPage)