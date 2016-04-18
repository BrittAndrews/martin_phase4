import React, { Component, PropTypes } from 'react';
import { render } from 'react-DOM';


const baseStyles={
	position:'absolute', 
	top:0,
	left:0,
	bottom:0,
	right:0,
	backgroundSize: 'cover',
	// transition: 'opacity 2s'
}

export default class BackgroundTransition extends Component {

	static propTypes = { 
		images : PropTypes.array.isRequired
	}

	constructor(...args) {
		super(...args);
		this.stopTransition = false;
		this.state = {
			from: '',
			to: '',
			opacity: 1,
			transition: 'opacity 0s'
		}
	}

	componentWillMount() {
		let current = 0;
		let next = 1;

		this.swap([current, next]);
	}

	componentWillUnmount() {
		this.stopTransition = true;
	}

	getNext([current, next]) {
		let { images } = this.props;
		current++;
		if ( current >= images.length ) {
			current = 0;
		}
		next++
		if ( next >= images.length ) {
			next = 0;
		}
		return [current, next];
	}

	transition([current, next]) {
		if (this.stopTransition) {
			return;
		}
		// console.log('trans', current, next)
		let { images } = this.props;
		this.setState({
			from: images[current],
			to: images[next],
			opacity: 0,
			transition: 'opacity 2s'
		})
		setTimeout(() => {
			this.swap(this.getNext([current, next]))
		}, 5000);
	}

	swap([current, next]) {
		if (this.stopTransition) {
			return;
		}
		// console.log('swap', current, next)
		let { images } = this.props;
		this.setState({
			from: images[current],
			to: images[next],
			opacity: 1,
			transition: 'opacity 0s'
		});
		setTimeout(() => {
			this.transition([current, next]);
		}, 1000)
	}

	render(){
		let { from, to, opacity, transition } = this.state;

		let bgFrom = {backgroundImage: `url(${from})`};
		let bgTo = {backgroundImage: `url(${to})`};
		let stylesFrom = Object.assign({}, baseStyles, bgFrom, {opacity, transition});
		let stylesTo = Object.assign({}, baseStyles, bgTo);

		return(
			<div>
				<div style={stylesTo} />
				<div style={stylesFrom} />
			</div>
		)
	}
}