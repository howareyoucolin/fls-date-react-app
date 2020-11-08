import React from 'react';
import ReactDOM from 'react-dom';

import Member from '../modules/member';

class MemberList extends React.Component {
	
	render() {
		return (
			<div className="main">
				<div className="container">
					<div className="content">
						<Member />
						<Member />
						<Member />
						<Member />
						<Member />
					</div>
				</div>
			</div>
		)
	}
};

export default MemberList;