import React from 'react';
import ReactDOM from 'react-dom';

import Header from '~/src/components/header';

class MemberPage extends React.Component {
	render() {
		return (
			<>
				<Header />
				<div className="main">
					<div className="container">
						<p>This is member page!!!</p>
					</div>
				</div>
			</>
		)
	}
};

export default MemberPage;