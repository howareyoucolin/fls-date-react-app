import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/header';
import MemberList from './components/member-list';

class Home extends React.Component {
	render() {
		return (
			<div className="app">
				<Header />
				<div className="main">
					<div className="container">
						<MemberList />
					</div>
				</div>
			</div>
		)
	}
};

ReactDOM.render(<Home />, document.getElementById('root'));
