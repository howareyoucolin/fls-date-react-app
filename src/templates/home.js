import React, {useEffect} from 'react'
import {seo} from '~/src/includes/functions'
import Header from '~/src/components/header'
import MemberList from '~/src/components/member-list'
import Footer from '~/src/components/footer'

export default function Home(props) {
	
	useEffect( () => {
    seo({
      title: '找男朋友找女朋友',
      description: '纽约有什么好的婚介交友? 你在相亲,找男朋友吗? 理工男在找女朋友. 18岁与家人一起移民来美国, 在纽约法拉盛住了差不多十多年. 广交友, 性格好.'
    });
  }, [])
	
	return (
		<>
			<Header />
			<div className="main">
				<div className="container">
					<MemberList />
				</div>
			</div>
			<Footer />
		</>
	)
	
};