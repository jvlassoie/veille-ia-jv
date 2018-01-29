import React, { Component } from 'react';

import {
	BrowserRouter,
	Route,
	NavLink,
	Redirect,
	Switch
} from 'react-router-dom';

import Actualite from './../components/Actualite'
import Home from './../components/Home'


export default () => 
(
	<BrowserRouter>
	<Switch>
	<Route path="/veille-ia-jv" exact component={Home}/>
	<Route path="/veille-ia-jv/actualite" exact component={Actualite}/>
	<Route component={Home}/>
	</Switch>
	</BrowserRouter>
	);