import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {initPosts} from '~/src/actions/postActions'
import '~/src/scss/component-footer.scss'

const Footer = (props) => {
	
	useEffect(() => {
		props.initPosts();
  }, [])
	
	const postList = props.posts.slice(0, 5).map((post, key) => {
		let {post_name, post_title} = post
		return (
			<li key={key}>
				<a href={`/blog/${post_name}`}>{post_title}</a>
			</li>
		)
	})
	
	return (
		<div className="footer">
		<div className="container">
			<h3>
				<a href='/blog'>
					婚恋博客文章
				</a>
			</h3>
			<ul>{postList}</ul>
			<div>
				<a href='/sitemap'>网站地图</a> &nbsp;&nbsp;
				<a href='/world-single-union'>世界单身联谊会</a> &nbsp;&nbsp;
			</div>
		</div>
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
    initPosts: () => dispatch(initPosts())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer)