import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Store from '~/src/store'
import Home from '~/src/templates/home';
import MemberPage from '~/src/templates/member-page'
import Blog from '~/src/templates/blog'
import Post from '~/src/templates/post'

class App extends React.Component {
	render() {
		return (
			<div className="app">
			
				<BrowserRouter>
			
					<Switch>
						<Route exact path="/blog" component={Blog} />
						<Route path="/blog/:slug" component={Post} />
						<Route path="/member/:id" component={MemberPage} />
						<Route path="/" component={Home} />
					</Switch>
					
				</BrowserRouter>
				
			</div>
		)
	}
}

ReactDOM.render(
	<Provider store={Store}>
		<App />
	</Provider>
	, 
	document.getElementById('root')
)
