import $ from 'jquery';
import React, { Component } from 'react';
import { render } from 'react-dom';
import ImageNavigation from './gallery-component';




var data = [
 { manu: 'Antoine Proulx',
   link: 'http://www.antoineproulx.com/',
      images: [
   './images/antoineproulx2.png',
   './images/antoineproulx1.png',
   './images/antoineproulx5.png',
   './images/antoineproulx4.png',
   './images/antoineproulx3.png' 
 ]},

 { manu: 'William Switzer', 
   link: 'http://www.antoineproulx.com/',
      images: [
   './images/145.jpg', 
   'http://fillmurray.com/20/20/n2',
   'http://fillmurray.com/20/20/n3',
   'http://fillmurray.com/20/20/n4',
   'http://fillmurray.com/20/20/n5'
 ]},

  { manu: 'Chip and Company', 
    link: 'http://www.antoineproulx.com/',
      images: [
   './images/chipnco.png',
   './images/antoineproulx1.png',
   './images/antoineproulx5.png',
   './images/antoineproulx4.png',
   './images/antoineproulx3.png' 
 ]},

  { manu: 'Costantini Design', 
    link: 'http://www.antoineproulx.com/',
      images: [
   './images/3.jpg',
   './images/antoineproulx1.png',
   './images/antoineproulx5.png',
   './images/antoineproulx4.png',
   './images/antoineproulx3.png' 
 ]},

  { manu: 'Interior Crafts INC', 
    link: 'http://www.antoineproulx.com/',
      images: [
   './images/7.jpg',
   './images/antoineproulx1.png',
   './images/antoineproulx5.png',
   './images/antoineproulx4.png',
   './images/antoineproulx3.png' 
 ]},

   { manu: 'Marian Jamieson',
     link: 'http://www.antoineproulx.com/', 
      images: [
   './images/5.jpg',
   './images/antoineproulx1.png',
   './images/antoineproulx5.png',
   './images/antoineproulx4.png',
   './images/antoineproulx3.png' 
 ]},

   { manu: 'Marjorie Skouras', 
     link: 'http://www.antoineproulx.com/',
      images: [
   './images/16.jpg',
   './images/antoineproulx1.png',
   './images/antoineproulx5.png',
   './images/antoineproulx4.png',
   './images/antoineproulx3.png' 
 ]},

   { manu: ' Orior NY',
     link: 'http://www.antoineproulx.com/', 
      images: [
   './images/8.jpg',
   './images/antoineproulx1.png',
   './images/antoineproulx5.png',
   './images/antoineproulx4.png',
   './images/antoineproulx3.png' 
 ]},

   { manu: 'Scala Luxury', 
     link: 'http://www.antoineproulx.com/',
      images: [
   './images/9.jpg',
   './images/antoineproulx1.png',
   './images/antoineproulx5.png',
   './images/antoineproulx4.png',
   './images/antoineproulx3.png' 
 ]},

   { manu: 'Sylvan SF', 
     link: 'http://www.antoineproulx.com/',
      images: [
   './images/66.jpg',
   './images/antoineproulx1.png',
   './images/antoineproulx5.png',
   './images/antoineproulx4.png',
   './images/antoineproulx3.png' 
 ]},



];



export default class Furniture extends Component {

   render() {

   return (

     <ImageNavigation data={data}/>
   )
 }

}














// export default class FurnitureData [
// 	{ manu: 'Casella', images: [
// 		'./images/1.jpg',
// 		'./images/66.jpg',
// 		'./images/8.jpg',
// 		'./images/14.jpg',
// 		'./images/16.jpg'
// 	]},
// 	{ manu: 'Antoine Proulx', images: [
// 		'./images/furniture/antoineproulx1.png',
// 		'./images/furniture/antoineproulx2.png',
// 		'./images/furniture/antoineproulx3.png',
// 		'./images/furniture/antoineproulx4.png',
// 		'./images/furniture/antoineproulx5.png'
// 	]},
// 	{ manu: 'Chip and Company', images: [
// 		'./images/furniture/ChipandCompany-7512.jpg',
// 		'./images/furniture/ChipandCompany-8239.jpg',
// 		'./images/furniture/ChipandCompany-web-01.jpg',
// 		'./images/furniture/chipandcowarrior.jpg',
// 		'./images/furniture/chipnco.png'
// 	]}
// 	]
// 	;