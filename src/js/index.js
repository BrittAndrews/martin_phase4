import $ from 'jquery';
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import MainComponent from './main-component';
import ViewHome from './view-home';
import About from './about';
import Furniture from './furniture';
import Lighting from './lighting';
import WallCoverings from './wallcoverings';
import Textiles from './textiles';
import Contact from './contact';




render((
  <Router history={hashHistory}>


    	<Route path="/" component={MainComponent}>
     	 	<IndexRoute component={ViewHome}/>
     	 	<Route path="about" component={About}/>
     	 	<Route path="furniture" component={Furniture}/>
     	 	<Route path="lighting" component={Lighting}/>
     	 	<Route path="wallcoverings" component={WallCoverings}/>
     	 	<Route path="textiles" component={Textiles}/>
     	 	<Route path="contact" component={Contact}/>
   		</Route> 		


  </Router>
), document.querySelector('.app'))
















///////////////////////////


// var currentManuIndex = 0;
// var currentImageIndex = 0;

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
// 		'http://fillmurray.com/20/20/',
// 		'./images/1.jpg',
// 		'http://fillmurray.com/40/20/',
// 		'http://fillmurray.com/20/40/',
// 		'http://fillmurray.com/60/60/'
// 	]},

// 	{ manu: 'Nilson', images: [
// 		'http://fillmurray.com/20/20/n1',
// 		'http://fillmurray.com/20/20/n2',
// 		'http://fillmurray.com/20/20/n3',
// 		'http://fillmurray.com/20/20/n4',
// 		'http://fillmurray.com/20/20/n5'
// 	]}
// ];


// $('.app').append(nextImage(data));

/////////////////////////////////////////////////
// return `
// 	<div class="image-slider-wrapper">

// 		<div class="image-slider-horizontal">
// 		<img src="./images/1.jpg" alt="alttag">
// 		</div>

// 		<div class="image-slider-horizontal-2">
// 		<img src="./images/1.jpg" alt="alttag">
// 		</div>

// 	</div>

// `;
