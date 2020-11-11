import React from 'react';
import axios from 'axios'

import Header from '~/src/components/header';
import PostDetail from '~/src/components/post-detail';
import Footer from '~/src/components/footer';

const Post = (props) => {
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

export default Post;