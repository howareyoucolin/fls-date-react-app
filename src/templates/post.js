import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {useParams} from 'react-router-dom'
import {getExcerpt, seo} from '~/src/includes/functions'
import {initPost} from '~/src/actions/postActions'
import Header from '~/src/components/header'
import PostDetail from '~/src/components/post-detail'
import Footer from '~/src/components/footer'

const Post = (props) => {
	
	const {slug} = useParams()
	
	useEffect(() => {
		props.initPost(slug)
  }, [slug])
	
	useEffect(() => {
		let {title, description, keywords, post_title, post_content} = props.post
		if(typeof post_title !== 'undefined'){
			seo({
				title: title || post_title,
				description: description || getExcerpt(post_content, 120),
				keywords: keywords
			});
		}
  }, [props.post])
	
	return (
		<>
			<Header />
			<div className="main">
				<div className="container">
					<PostDetail />
				</div>
			</div>
			<Footer />
		</>
	)
	
}

const mapStateToProps = state => {
  return {
    post: state.posts.post
  }
}

const mapDispatchToProps = dispatch => {
  return {
    initPost: (slug) => dispatch(initPost(slug))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post)