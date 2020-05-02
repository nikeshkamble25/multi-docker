import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import OtherPage from './OtherPage';
import Fib from './Fib';

function App() {
	return (
		<div className='App'>
			<Router>
				<header>
					<h1>Welcome to React App!</h1>
					<Link to='/'>Home</Link>
					<Link to='/otherpage'>Other Page</Link>
				</header>
				<div>
					<Route exact path='/' component={Fib}></Route>
					<Route exact path='/otherpage' component={OtherPage}></Route>
				</div>
			</Router>
		</div>
	);
}

export default App;
