import React, {useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {connect} from 'react-redux'
import {initPost} from '~/src/actions/postActions'
import BreadCrumbs from '~/src/modules/breadcrumbs'

const PostDetail = (props) => {
	
	const {slug} = useParams()
	
	useEffect(() => {
		props.initPost(slug)
  }, [slug])
	
	const {post_title, post_date, post_content} = props.post;
	
	return (
		<div className="postDetail">
		
			<BreadCrumbs 
					items={[
						{label:'博客', url:'/blog'},
						{label:slug}
					]}
				/>
				
			<h2>{post_title}</h2>
			<p>发表于: {post_date}</p>
			<div dangerouslySetInnerHTML={{ __html: post_content }}></div>
			
		</div>
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
)(PostDetail)