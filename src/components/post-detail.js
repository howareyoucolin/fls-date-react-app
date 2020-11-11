import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';

import BreadCrumbs from '~/src/modules/breadcrumbs';

const PostDetail = (props) => {
	
	const {slug} = useParams();
	
	const [post, setPost] = useState({});
	
	useEffect(() => {
		axios.get('https://api.369usa.com/post/?slug='+slug)
		.then(result => {
			setPost(result.data);
		})
	}, [slug]);
	
	let {post_title, post_date, post_content} = post;
	
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
	);
}

export default PostDetail;