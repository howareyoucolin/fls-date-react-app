import React, {useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {connect} from 'react-redux'
import {fetchPosts} from '~/src/actions/postActions'
import BreadCrumbs from '~/src/modules/breadcrumbs'
import {getExcerpt} from '~/src/includes/functions'

const blogDetail = (props) => {
	
	useEffect(() => {
		props.initPosts()
  }, [])
	
	const postList = props.posts.map((post, key) => {
		let {ID, post_name, post_title, post_content} = post
		return (
			<div key={ID}>
				<h3>
					<a href={`/blog/${post_name}`}>{post_title}</a>
				</h3>
				<p>
					{getExcerpt(post_content)} ... &nbsp;
					<a className="read-more" href={`/blog/${post_name}`}>[查看全文]</a>
				</p>
			</div>
		)
	})
	
	return (
		<div className="postDetail">
		
			<BreadCrumbs 
					items={[
						{label:'博客'},
					]}
				/>
				
			{postList}
			
		</div>
	)
}

const mapStateToProps = state => {
  return {
    posts: state.posts.posts
  }
}

const mapDispatchToProps = dispatch => {
  return {
    initPosts: () => dispatch(fetchPosts())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(blogDetail)