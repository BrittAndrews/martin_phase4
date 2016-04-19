import $ from 'jquery';
import React, { Component } from 'react';
import { render } from 'react-dom';
import ImageNavigation from './gallery-component';




var data = [
 { manu: 'Casella',
   link: 'http://www.casellalighting.com/',
   cat: 'Lighting Vendors',
   para: 'Casella Lighting manufactures superior quality lamps using a process that has been time-tested for over 75 years. As the exclusive makers of renowned Casella Lamps, artisans at Casella are skilled craftspeople who build and assemble each lamp according to exact customer specifications.',
   location: 'Sacramento, CA',
      images: [
   './images/casella2.jpg',
   './images/casella1.jpg',
   './images/casella3.jpg'
 ]},

 { manu: 'Kenneth Nilson', 
   link: 'http://www.antoineproulx.com/',
   cat: 'Lighting Vendors',
   para:'William Switzer’s three collections furnish a handful of exceptional spaces, throughout the world, designed by professionals with an eye for the exquisite. We honour the tradition of furniture as a work of art. Guided by established principles of taste, we create antique reproductions of furniture that has graced the most stately homes in European history.',
   location:'Vancouver, British Columbia',

      images: [
   './images/williamswitzer2.jpg', 
   './images/williamswitzer1.jpg',
   './images/williamswitzer4.jpg',
   './images/williamswitzer5.jpg',
   './images/williamswitzer6.jpg',
   './images/williamswitzer7.jpg',
   './images/williamswitzer8.jpg',
   './images/williamswitzer9.jpg'
 ]},

  { manu: 'Marian Jamieson', 
    link: 'http://www.antoineproulx.com/',
    cat: 'Lighting Vendors',
    para:'William Switzer’s three collections furnish a handful of exceptional spaces, throughout the world, designed by professionals with an eye for the exquisite. We honour the tradition of furniture as a work of art. Guided by established principles of taste, we create antique reproductions of furniture that has graced the most stately homes in European history.',
    location:'',
      images: [
   './images/chipnco.png',
   './images/antoineproulx1.png',
   './images/antoineproulx5.png',
   './images/antoineproulx4.png',
   './images/antoineproulx3.png' 
 ]},

  { manu: 'Marjories Kouras', 
    link: 'http://www.antoineproulx.com/',
    cat: 'Lighting Vendors',
    para:'William Switzer’s three collections furnish a handful of exceptional spaces, throughout the world, designed by professionals with an eye for the exquisite. We honour the tradition of furniture as a work of art. Guided by established principles of taste, we create antique reproductions of furniture that has graced the most stately homes in European history.',
    location:'',
      images: [
   './images/3.jpg',
   './images/antoineproulx1.png',
   './images/antoineproulx5.png',
   './images/antoineproulx4.png',
   './images/antoineproulx3.png' 
 ]},

  { manu: 'Otium', 
    link: 'http://www.antoineproulx.com/',
    cat: 'Lighting Vendors',
    para:'William Switzer’s three collections furnish a handful of exceptional spaces, throughout the world, designed by professionals with an eye for the exquisite. We honour the tradition of furniture as a work of art. Guided by established principles of taste, we create antique reproductions of furniture that has graced the most stately homes in European history.',
    location:'',
      images: [
   './images/7.jpg',
   './images/antoineproulx1.png',
   './images/antoineproulx5.png',
   './images/antoineproulx4.png',
   './images/antoineproulx3.png' 
 ]},

   { manu: 'Rebekah Graves',
     link: 'http://rebekahgraves.com/', 
     cat: 'Lighting Vendors',
     para:'Rebekah is a Charlottesville, VA artist who creates hand-crafted sculptural lighting.  Mainly, she sculpts in porcelain, fires in a Japanese-style Anagama wood-fired kiln, and casts her shapes using Nepalese and Japanese hand-made paper.',
     location:'Charlottesville, VA',
      images: [
   './images/rebekahgraves1.png',
   './images/rebekahgraves2.png',
   './images/rebekahgraves3.png'
 ]},


];



export default class Furniture extends Component {

   render() {

   return (

     <ImageNavigation data={data}/>
   )
 }

}










