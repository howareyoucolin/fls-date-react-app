import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import {fetchPosts} from '~/src/actions/postActions'

const Footer = (props) => {
	
	useEffect(() => {
		props.initPosts();
  }, [])
	
	const postList = props.posts.map((post, key) =>
		<li key={key}>
			<a href={'/blog/'+post.slug}>{post.title}</a>
		</li>
	)
	
	return (
		<div className="footer">
		<div className="container">
			<h3>婚恋博客文章</h3>
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
    posts: state.posts
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
)(Footer)