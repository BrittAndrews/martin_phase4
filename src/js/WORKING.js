// import React, { Component } from 'react';
// import { render } from 'react-dom';



// SLIDESHOW DOT JS 




// let currentManuIndex = 0;
// let currentImageIndex = 0;

// function getCurrentImage() {
// 	var manuCount = data.length;
// 	if (currentManuIndex < 0) {
// 		currentManuIndex = 0;
// 	}
// 	var obj = data[Math.min(currentManuIndex, manuCount-1)];
// 	var imageCount = obj.images.length;
// 	if (currentImageIndex < 0) {
// 		currentImageIndex = 0;
// 	}
// 	var img = obj.images[Math.min(currentImageIndex, imageCount-1)];
// 	return img;
// }

// function nextImage() {
// 	currentImageIndex++
// 	return getCurrentImage();
// }

// function prevImage() {
// 	currentImageIndex--;
// 	return getCurrentImage();
// }

// function nextManu() {
// 	currentManuIndex++;
// 	currentImageIndex = 0;
// 	return getCurrentImage();
// }

// var data = [
// 	{ manu: 'Casella', images: [
// 		'http://s.hswstatic.com/gif/furniture-restoration-300x300.jpg',
// 		'http://s3.amazonaws.com/afanews_articles/01062/DP255629.png',
// 		'http://tfblog.tenantfile.com/wp-content/uploads/2015/07/modern-furniture-wall-decor-ideas-house-plans-sofa-design-loughton-creative-design-sofachairbedcarpet-creative-sofa-bed-designs-creative-design-sofachairbedcarpet-creative-sofa-designs-cre.jpg',
// 		'http://mindbodyspiritinc.com/wp-content/uploads/2015/12/furniture-boston.jpg',
// 		'https://www.afwonline.com/furniture/images/dining-room/rustico.jpg'
// 	]},

// 	{ manu: 'Nilson', images: [
// 		'http://www.designsponge.com/wp-content/uploads/2010/07/284-AUK177a1.jpg',
// 		'http://fillmurray.com/20/20/n2',
// 		'http://fillmurray.com/20/20/n3',
// 		'http://fillmurray.com/20/20/n4',
// 		'http://fillmurray.com/20/20/n5'
// 	]}
// ];


// 				// <img src={image} width="200" height="150"/>


// export default class SlideShow extends Component {
// 	constructor(...args) {
// 		super(...args);
// 		this.state = { image: getCurrentImage() }
// 	}

// 	render() {
// 		let { image }  = this.state;
// 		return (
// 			<div style={{width: '100%', height: '100vh', backgroundImage: `url(${image})`, backgroundSize: 'cover', position: 'relative'}}>
// 				<button style={{position: 'absolute', left: 20, top: '50vh'}} onClick={() => this.setState({image: prevImage()})}>←</button>
// 				<button style={{position: 'absolute', right: 20, top: '50vh'}}  onClick={() => this.setState({image: nextImage()})}>→</button>
// 				<button  style={{position: 'absolute', left: '50%', bottom: 20}}  onClick={() => this.setState({image: nextManu()})}>↓</button>
// 			</div>
// 		)
// 	}

// }







// INDEX DOT JS 


// // Javascript Entry Point

// import React from 'react';
// import { render } from 'react-dom';
// import SlideShow from './slideshow';

// render((
// 	<SlideShow/>
// ), document.querySelector('.app'))
