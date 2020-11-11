import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from "react-router-dom";

import Home from '~/src/templates/home';
import MemberPage from '~/src/templates/member-page';
import Post from '~/src/templates/post';

class App extends React.Component {
	render() {
		return (
			<div className="app">
			
				<BrowserRouter>
			
					<Switch>
						<Route path="/blog/:slug" component={Post} />
						<Route path="/member/:id" component={MemberPage} />
						<Route path="/" component={Home} />
					</Switch>
					
				</BrowserRouter>
				
			</div>
		)
	}
};

ReactDOM.render(<App />, document.getElementById('root'));
