import React from 'react'
import Header from '~/src/components/header'
import PostDetail from '~/src/components/post-detail'
import Footer from '~/src/components/footer'

export default function Post(props){
	
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