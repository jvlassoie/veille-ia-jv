import React, { Component } from 'react';
import List from "./List"
import Nav from "./Nav"

class Actualite extends Component {
	

	render() {
		return (
		<div>	
    	<Nav />
		<div className="container">

		<h3 className="center-align">
		Google Alerts
		</h3>
		{/*mot: intelligence artificiel*/}
		<div className="chip">
		intelligence artificiel
		</div>
		<List urlRss="https://www.google.fr/alerts/feeds/01522933145906137599/13872070694008706245" />
		{/*mot: intelligence artificiel dans les jeux video*/}
		<div className="chip">
		intelligence artificiel dans les jeux video
		</div>
		<List urlRss="https://www.google.fr/alerts/feeds/01522933145906137599/16769526041914132694" />
		{/*mot: intelligence artificiel jeu*/}
		<div className="chip">
		intelligence artificiel jeu
		</div>
		<List urlRss="https://www.google.fr/alerts/feeds/01522933145906137599/314152243662205623" />
		</div>
		</div>
);
	}
}

export default Actualite;
