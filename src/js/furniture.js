import $ from 'jquery';
import React, { Component } from 'react';
import { render } from 'react-dom';




export default class Furniture extends Component {
  render() {



  	return(

      <div className="furniture-wrapper">

        <div className="collection-name-flex">
          <div className="collection-name-box">
  		     <h3><a href="http://www.antoineproulx.com/"> Antoine Proulx</a> </h3>
          </div>
        </div>

  			<img className="furniture-individual-image" src="./images/antoineproulx1.png" alt="ap1"/>
  			<img className="furniture-individual-image" src="./images/antoineproulx5.png" alt="ap1"/>
			  <img className="furniture-individual-image" src="./images/antoineproulx3.png" alt="ap1"/>
			  <img className="furniture-individual-image" src="./images/antoineproulx4.png" alt="ap1"/>
			  <img className="furniture-individual-image" src="./images/antoineproulx2.png" alt="ap1"/>

      </div>

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