import React from 'react';

import Header from '~/src/components/header';
import MemberDetail from '~/src/components/member-detail';
import Footer from '~/src/components/footer';

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
				<Footer />
			</>
		)
	}
};

export default MemberPage;