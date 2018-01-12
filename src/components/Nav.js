import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Actualite from './Actualite'
import Home from './Home'
import 'materialize-css/dist/js/materialize.min.js';

class Nav extends Component {


  componentDidMount(){

    window.jQuery(".button-collapse").sideNav({
       closeOnClick: true
    })

  }



  render() {


    return (
      <Router>
      <div>
      <nav className="teal lighten-2">
      <div className="nav-wrapper container">
      <Link className="brand-logo" to="/veille-ia-jv">IA In JV</Link>
      <a href="" data-activates="nav-mobile" className="button-collapse"><i className="material-icons">menu</i></a>
      <ul className="right hide-on-med-and-down">
      <li><Link to="/veille-ia-jv/actualite">Actualité</Link></li>
      </ul>
      <ul className="side-nav" id="nav-mobile">
      <li><Link to="/veille-ia-jv">Accueil</Link></li>
      <li><Link to="/veille-ia-jv/actualite">Actualité</Link></li>
      </ul>
      </div>
      </nav>
      <br/>
      <div>
      <Route exact path="/veille-ia-jv"  component={Home}/>
      <Route path="/veille-ia-jv/actualite"  component={Actualite}/>
      </div>
      </div>
      </Router>
      );
  }
}

export default Nav;

