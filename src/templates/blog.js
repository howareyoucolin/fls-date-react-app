import React from 'react'
import Header from '~/src/components/header'
import BlogDetail from '~/src/components/blog-detail'
import Footer from '~/src/components/footer'

export default function Post(props){
	
	return (
		<>
			<Header />
			<div className="main">
				<div className="container">
					<BlogDetail />
				</div>
			</div>
			<Footer />
		</>
	)
	
}