import React, { Component } from 'react';
import 'materialize-css/dist/js/materialize.min.js';

import {
  BrowserRouter,
  Route,
  NavLink
} from 'react-router-dom';

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
      <div>
      <nav className="teal lighten-2">
      <div className="nav-wrapper container">
      <NavLink className="brand-logo" to="/veille-ia-jv">IA In JV</NavLink>
      <a href="" data-activates="nav-mobile" className="button-collapse"><i className="material-icons">menu</i></a>
      <ul className="right hide-on-med-and-down">
      <li><NavLink to="/veille-ia-jv/actualite" activeStyle={styleActivation} >Actualite</NavLink></li>
      <li><NavLink to="/veille-ia-jv/presentation" activeStyle={styleActivation} >Presentation</NavLink></li>
      </ul>
      <ul className="side-nav" id="nav-mobile">
      <li><NavLink exact to="/veille-ia-jv" activeStyle={styleActivation}  >Accueil</NavLink></li>
      <li><NavLink to="/veille-ia-jv/actualite" activeStyle={styleActivation}  >Actualite</NavLink></li>
      <li><NavLink to="/veille-ia-jv/presentation" activeStyle={styleActivation}  >Presentation</NavLink></li>
      </ul>
      </div>
      </nav>
     
      </div>
      );
  }
}

export default Nav;

