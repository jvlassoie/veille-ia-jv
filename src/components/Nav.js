import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Actualite from './Actualite'
import Home from './Home'

class Nav extends Component {
  render() {
    return (
      <Router>
      <div>
      <nav className="teal lighten-2">
      <div className="nav-wrapper container">
      <Link className="brand-logo" to="/">IA In JV</Link>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
      <li><Link to="/actualite">Actualité</Link></li>
      </ul>
      </div>
      </nav>
      <br/>
      <div>
      <Route exact path="/"  component={Home}/>
      <Route path="/actualite"  component={Actualite}/>
      </div>
      </div>
      </Router>
      );
  }
}

export default Nav;

