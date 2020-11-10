import React from 'react';
import ReactDOM from 'react-dom';

import Header from '~/src/components/header';
import MemberDetail from '~/src/components/member-detail';

class MemberPage extends React.Component {
	
	constructor(props) {
     super(props);
     this.id = props.match.params.id;
   }
	
	render() {
		return (
			<>
				<Header />
				<div className="main">
					<div className="container">
						<MemberDetail id={this.id} />
					</div>
				</div>
			</>
		)
	}
};

export default MemberPage;