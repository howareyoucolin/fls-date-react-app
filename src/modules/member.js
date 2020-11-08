import React from 'react';
import ReactDOM from 'react-dom';

class Member extends React.Component {
	
	componentWillMount() {
		this.baseUrl = '//'+window.location.hostname+'/';
	}
	
	render() {
		return (
			<div class="member clear">
				<h2>
					<a href="https://www.flushingdating.com/member/16">法拉盛理工男诚征女朋友</a>	
				</h2>
				<a href="https://www.flushingdating.com/member/16">
					<img class="profile" src="https://www.flushingdating.com/uploads/9603e03806ae31df86e279b01a603108.jpg" />
				</a>
				<p>
					Colin Zhao , 18 , 男生<br/>
					微信: <b class="focus">colin6478828</b><br/>
				</p>
				<p class="intro">
					身高177厘米,  来自广东, 18岁移民来美国, 在纽约法拉盛住了差不多十多年, 在Queens College读数学与计算机的专业, 从事IT行业, 现在在美国人大公司里担任Senior Software Engineer ...
					<a href="https://www.flushingdating.com/member/16">[更多]</a>
				</p>
				<div class="clear"></div>
			</div>
		)
	}
};

export default Member;