import React, { Component } from 'react';
import axios from 'axios';
import html_specialchars from 'html-specialchars';
import Loader from './Loader';
import Moment from 'react-moment';
import moment from 'moment/min/moment-with-locales';


class List extends Component {

	constructor(props){
		super(props);
		this.state = {
			items : [],
			loader: true
		};

		Moment.globalMoment = moment;
		Moment.globalLocale = 'fr';
		this.urlRss = this.props.urlRss;


	}




	componentWillMount() {
		const urlBase = "https://api.rss2json.com/v1/api.json?rss_url=";
		
		axios.get(urlBase + this.urlRss)
		.then(res => {
			this.setState({
				items : res.data.items,
				loader:false
			})
		});
	}


	getList(){

		if (this.state.items.length > 0) {


		return	(this.state.items.map((item, index) =>
			<div className="row" key={index}>
			<div className="col s12">
			<div className="card blue-grey darken-1">
			<div className="card-content white-text">
			<span className="card-title" dangerouslySetInnerHTML={{ __html: item.title }} />
			<div className="row">
			<div className="valign-wrapper col s12">
			<i className="material-icons">access_time</i>
			<Moment className="grey-text text-lighten-1" style={ {
				fontWeight: 'bold',
				fontStyle: 'italic',
				paddingLeft: '1em'
			} } fromNow ago>{item.pubDate}</Moment>
			</div>
			</div>
			<p dangerouslySetInnerHTML={{ __html: item.content }} />
			</div>
			<div className="card-action">
			<a href={html_specialchars.unescape(item.link)} >Voir plus</a>
			</div>
			</div>
			</div>
			</div>
			))
		}else{
		
			return (
				<p className="row center-align" style={{fontStyle: "italic"}}>Rien pour l'instant</p>
				)
		}
	}

	render() {

		let loading = this.state.loader
		
		return (
			<div>

			{loading ? (
				
				<div className="center">		
				<Loader/>
				</div>
				
				) : 

			this.getList()

		}


		</div>


		)
	}
}

export default List;
