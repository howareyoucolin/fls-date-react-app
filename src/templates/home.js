import React from 'react';
import ReactDOM from 'react-dom';

import Header from '~/src/components/header';
import MemberList from '~/src/components/member-list';
import Footer from '~/src/components/footer';

class Home extends React.Component {
	render() {
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
	}
};

export default Home;