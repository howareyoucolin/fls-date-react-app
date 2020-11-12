import React, {useEffect} from 'react'
import {seo} from '~/src/includes/functions'
import Header from '~/src/components/header'
import BlogDetail from '~/src/components/blog-detail'
import Footer from '~/src/components/footer'

export default function Post(props){
	
	useEffect( () => {
    seo({
      title: '法拉盛交友博客',
      description: '纽约法拉盛婚介交友博客是一个十分有知识,有深度,有文化,对广大单身男女有帮助的一个博客,无论你是在找男朋友或者找女朋友或者就一般交友都是有着十分可贵的.'
    });
  }, [])
	
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