import React, {useState, useEffect} from 'react';
import axios from 'axios'

const Footer = (props) => {
	
	const [posts, setPosts] = useState([]);
	
	useEffect(() => {
    axios.get('https://api.369usa.com/posts/')
		.then(result => {
			setPosts(result.data);
		})
  }, []);
	
	const postList = posts.map((post, key) =>
		<li key={key}>
			<a href={'/blog/'+post.slug}>{post.title}</a>
		</li>
	);
	
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
	);
}

export default Footer;