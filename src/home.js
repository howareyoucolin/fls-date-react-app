import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/header';

class Home extends React.Component {
	render() {
		return (
			<div className="main">
				<Header />
			</div>
		)
	}
};

ReactDOM.render(<Home />, document.getElementById('root'));
