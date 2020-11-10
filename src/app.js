import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from "react-router-dom";

import Header from '~/src/components/header';
import MemberList from '~/src/components/member-list';

class App extends React.Component {
	render() {
		return (
			<div className="app">
			
				<BrowserRouter>
			
					<Switch>
					
						<Route path="/member">
							<Header />
							<div className="main">
								<div className="container">
									<p>This is member page!</p>
								</div>
							</div>
						</Route>
					
						<Route path="/">
							<Header />
							<div className="main">
								<div className="container">
									<MemberList />
								</div>
							</div>
						</Route>
						
					</Switch>
					
				</BrowserRouter>
				
			</div>
		)
	}
};

ReactDOM.render(<App />, document.getElementById('root'));
