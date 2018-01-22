import React, { Component } from 'react';
import {
	Appear, BlockQuote, Cite, CodePane, Code, Deck, Fill, Fit,
	Heading, Image, Layout, ListItem, List, Quote, Slide, Text
} from 'spectacle';

import createTheme from "spectacle/lib/themes/default";

class Presentation extends Component {
	
	componentWillMount(){

	/*	this.theme = createTheme({
			primary: "red",
			secondary: "blue"
		}, {
			primary: "Helvetica",
			secondary: { name: "Droid Serif", googleFont: true, styles: [ "400", "700i" ] }
		});*/
}
	render() {
		return (
			<Deck  transition={['slide']}  transitionDuration={500}>
			<Slide>
			<Text>Hello</Text>
			</Slide>
			<Slide>
			<Text>Hellodazdazdazd</Text>
			</Slide>
				<Slide>
			<Text>Hellodazdazdazd</Text>
			</Slide>
			</Deck>
			);
	}
}

export default Presentation;
