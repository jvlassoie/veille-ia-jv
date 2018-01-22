import React, { Component } from 'react';
import Nav from "./components/Nav"
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import Routes from './routes/index';



class App extends Component {
	render() {
		return (
			<Routes/>
			);
	}
}

export default App;
