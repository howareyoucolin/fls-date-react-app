import React from 'react'
import ReactDOM from 'react-dom'
import '~/src/scss/module-breadcrumbs.scss'

class BreadCrumbs extends React.Component {
	
	render() {
		
		const crumbsItems =  this.props.items.map((item, key) =>
			<React.Fragment key={key}>
				&gt;&gt;
				{
					typeof item.url !== 'undefined' ? 
					<a href={item.url}>{item.label}</a> :
					<span>{item.label}</span>
				}
			</React.Fragment>
		);
		
		return (
			<div className="breadCrumbs">
				<a href='/'>首页</a> 
				{crumbsItems}
			</div>
		)
	}
};

export default BreadCrumbs;