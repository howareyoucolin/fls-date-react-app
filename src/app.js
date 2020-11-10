import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from "react-router-dom";

import Home from '~/src/templates/home';
import MemberPage from '~/src/templates/member-page';

class App extends React.Component {
	render() {
		return (
			<div className="app">
			
				<BrowserRouter>
			
					<Switch>
					
						<Route path="/member">
							<MemberPage />
						</Route>
					
						<Route path="/">
							<Home />
						</Route>
						
					</Switch>
					
				</BrowserRouter>
				
			</div>
		)
	}
};

ReactDOM.render(<App />, document.getElementById('root'));
