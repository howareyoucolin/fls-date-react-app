import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
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
			<Link to={'/blog/'+post.title}>{post.title}</Link>
		</li>
	);
	
	return (
		<div className="footer">
		<div className="container">
			<h3>婚恋博客文章</h3>
			<ul>{postList}</ul>
			<div>
				<Link to='/sitemap'>网站地图</Link> &nbsp;&nbsp;
				<Link to='/world-single-union'>世界单身联谊会</Link> &nbsp;&nbsp;
			</div>
		</div>
		</div>
	);
}

export default Footer;