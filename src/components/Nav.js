import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom';
import Actualite from './Actualite'
import Home from './Home'
import 'materialize-css/dist/js/materialize.min.js';

class Nav extends Component {

  constructor(props){

    super(props)
    this.state = {
      activation: false
    }

  }

  componentDidMount(){

    window.jQuery(".button-collapse").sideNav({
     closeOnClick: true
   })

  }




  render() {

    const styleActivation = {
      fontWeight: "bold"
    }

    return (
      <Router>
      <div>
      <nav className="teal lighten-2">
      <div className="nav-wrapper container">
      <NavLink className="brand-logo" to="/veille-ia-jv">IA In JV</NavLink>
      <a href="" data-activates="nav-mobile" className="button-collapse"><i className="material-icons">menu</i></a>
      <ul className="right hide-on-med-and-down">
      <li><NavLink to="/veille-ia-jv/actualite" activeStyle={styleActivation} >Actualité</NavLink></li>
      </ul>
      <ul className="side-nav" id="nav-mobile">
      <li><NavLink exact to="/veille-ia-jv" activeStyle={styleActivation}  >Accueil</NavLink></li>
      <li><NavLink to="/veille-ia-jv/actualite" activeStyle={styleActivation}  >Actualité</NavLink></li>
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

