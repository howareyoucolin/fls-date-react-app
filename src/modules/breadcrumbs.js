import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from "react-router-dom";

import '~/src/scss/module-breadcrumbs.scss';

class BreadCrumbs extends React.Component {
	
	render() {
		
		const crumbsItems =  this.props.items.map((item, key) =>
			<React.Fragment key={key}>
				&gt;&gt;
				{
					typeof item.url !== 'undefined' ? 
					<Link to={item.url}>{item.label}</Link> :
					<span>{item.label}</span>
				}
			</React.Fragment>
		);
		
		return (
			<div className="breadCrumbs">
				<Link to='/'>首页</Link> 
				{crumbsItems}
			</div>
		)
	}
};

export default BreadCrumbs;