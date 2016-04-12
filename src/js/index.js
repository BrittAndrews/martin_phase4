import $ from 'jquery';
// import FurnitureData from './furniture-data';
// import LightingData from './lighting-data';
// import WallcoveringsData from './wallcoverings-data';
// import TextilesData from './textiles-data';





var currentManuIndex = 0;
var currentImageIndex = 0;

function getCurrentImage() {
	var manuCount = data.length;
	if (currentManuIndex < 0) {
		currentManuIndex = 0;
	}
	var obj = data[Math.min(currentManuIndex, manuCount-1)];
	var imageCount = obj.images.length;
	if (currentImageIndex < 0) {
		currentImageIndex = 0;
	}
	var img = obj.images[Math.min(currentImageIndex, imageCount-1)];
	return img;
}

function nextImage() {
	currentImageIndex++
	return getCurrentImage();
}

function prevImage() {
	currentImageIndex--;
	return getCurrentImage();
}

function nextManu() {
	currentManuIndex++;
	currentImageIndex = 0;
	return getCurrentImage();
}



var data = [
	{ manu: 'Casella', images: [
		'./images/1.jpg',
		'./images/66.jpg',
		'./images/8.jpg',
		'./images/14.jpg',
		'./images/16.jpg'
	]},

	{ manu: 'Nilson', images: [
		'http://fillmurray.com/20/20/n1',
		'http://fillmurray.com/20/20/n2',
		'http://fillmurray.com/20/20/n3',
		'http://fillmurray.com/20/20/n4',
		'http://fillmurray.com/20/20/n5'
	]}
];


$('.app').append(getCurrentImage(data));


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
