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
      <NavLink className="brand-logo" to="/veille-ia-jv">IA & JV</NavLink>
      <a href="" data-activates="nav-mobile" className="button-collapse"><i className="material-icons">menu</i></a>
      <ul className="right hide-on-med-and-down">
      <li><NavLink to="/veille-ia-jv/actualite" activeStyle={styleActivation} >Actualite</NavLink></li>
      <li><NavLink to="/veille-ia-jv/article" activeStyle={styleActivation} >Article</NavLink></li>
      <li><a href="https://docs.google.com/presentation/d/14_VR7RFSJnI7lIUKBma1WqNY0x5bTpPDvc_Sj9HHO7k/edit?usp=sharing">Présentation</a></li>
      <li><a href="https://github.com/jvlassoie/veille-ia-jv/blob/gh-pages/doc/vt.pdf">Document</a></li>
      </ul>
      <ul className="side-nav" id="nav-mobile">
      <li><NavLink exact to="/veille-ia-jv" activeStyle={styleActivation}>Accueil</NavLink></li>
      <li><NavLink to="/veille-ia-jv/actualite" activeStyle={styleActivation}>Actualite</NavLink></li>
      <li><NavLink to="/veille-ia-jv/article" activeStyle={styleActivation}>Article</NavLink></li>
      <li><a href="https://docs.google.com/presentation/d/14_VR7RFSJnI7lIUKBma1WqNY0x5bTpPDvc_Sj9HHO7k/edit?usp=sharing">Présentation</a></li>
      <li><a href="https://github.com/jvlassoie/veille-ia-jv/blob/gh-pages/doc/vt.pdf">Document</a></li>
      </ul>
      </div>
      </nav>
     
      </div>
      );
  }
}

export default Nav;

