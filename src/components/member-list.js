import React from 'react';
import ReactDOM from 'react-dom';

import Member from '../modules/member';

class MemberList extends React.Component {
	
	render() {
		return (
			<div className="memberList">
				<Member />
				<Member />
				<Member />
				<Member />
				<Member />
			</div>
		)
	}
};

export default MemberList;