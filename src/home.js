import React from 'react';
import ReactDOM from 'react-dom';

class A extends React.Component {
	render() {
		return (
			<div className="main">
				This is our very first react home page.
			</div>
		)
	}
};

ReactDOM.render(<A />, document.getElementById('root'));
