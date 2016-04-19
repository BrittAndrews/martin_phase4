import $ from 'jquery';
import React, { Component } from 'react';
import { render } from 'react-dom';
import ImageNavigation from './gallery-component';




var data = [
 { manu: 'Boeme',
   link: 'http://www.boeme.co.uk/',
   cat: 'Textile Vendors',
   para: 'Founded in 1992 by Marc Desplaines who launched the U.S corp. of renowned Japanese fashion designer Yohji Yamamoto in NYC. The Antoine Proulx collection of handcrafted furniture was designed by Marc out of his frustration at not being able to find what he was looking for in the market..',
   location: 'Phoenix, AZ',
      images: [
   './images/boeme1.jpg',
   './images/boeme2.jpg',
   './images/boeme3.jpg',
   './images/antoineproulx4.png',
   './images/antoineproulx3.png' 
 ]},

 { manu: ' Steve Mckenzies', 
   link: 'http://www.antoineproulx.com/',
   cat: 'Textile Vendors',
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

  { manu: 'Walter G', 
    link: 'http://www.antoineproulx.com/',
    cat: 'Textile Vendors',
    para:'William Switzer’s three collections furnish a handful of exceptional spaces, throughout the world, designed by professionals with an eye for the exquisite. We honour the tradition of furniture as a work of art. Guided by established principles of taste, we create antique reproductions of furniture that has graced the most stately homes in European history.',
    location:'',
      images: [
   './images/chipnco.png',
   './images/antoineproulx1.png',
   './images/antoineproulx5.png',
   './images/antoineproulx4.png',
   './images/antoineproulx3.png' 
 ]},

   { manu: 'Delinah Simmons', 
    link: 'http://www.deesimmonsinteriors.com/',
    cat: 'Textile Vendors',
    para:'This year Dee became a partner with Martin Nash in a showroom at the Atlanta Decorative Arts Center (ADAC). Martin Nash is a 4000+ square foot high end showroom specializing in organic, modern, and groovy interiors. The showroom represents furniture, lighting, fabrics, wallcovering, original artwork, and one of a kind pieces from manufacturers and artists. Dee also launced a textural fabric line under her name, Delinah Simmons, that includes velvets, mohairs, and linens. Alongside her fabric line, Dee has a collection of vintage Emilio Pucci and Vera Neumann scarves that she has framed in shadow boxes and repurposed into beautiful pillows.',
    location:'',
      images: [
   './images/17.jpg',
   './images/delinahsimmons.jpg'
 ]}


];



export default class Textile extends Component {

   render() {

   return (

     <ImageNavigation data={data}/>
   )
 }

}



