import React, { Component } from 'react';
import CatComponent from './CatComponent';
import GraceHopperQuoteComponent from './GraceHopperQuoteComponent';
import MouseComponet from './MouseComponent';

class App extends Component {
	render() {
		// your code in the return statement below!
		return (
			<div className="App">
				<CatComponent />
				<GraceHopperQuoteComponent />
				<MouseComponet/>
				{/* one more component missing */}
			</div>
		);
	}
}

export default App;

