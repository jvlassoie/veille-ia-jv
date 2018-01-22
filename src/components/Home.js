import React, { Component } from 'react';
import Nav from "./Nav"


class Home extends Component {


  render() {

    return (
      <div>
      <Nav/>
      <div className="container">
      
      <div className="row">	
      <h3>Veille Technologique : Intélligence artificiel dans le monde des jeux video (jeu)</h3>	
      </div>
      
      <div className="row">	
      <p className="pageSize">Dans le cadre du cours de veille technologique, je m'informe du sujet mentionné ci-dessus et publie mon travail ainsi que le flux d'information sur lequel je me base</p>
      </div>


      </div>
      </div>
  
      );
  }
}

export default Home;
