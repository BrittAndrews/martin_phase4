import React, { Component } from 'react';
import $ from 'jquery';
import playArrow from 'material-ui/lib/svg-icons/av/play-arrow';

export default class ViewHome extends Component {
  render() {

 //  	$("#view-home-slideshow > div:gt(0)").hide();

	// setInterval(function() { 
 //  	$('#view-home-slideshow > div:first')
 //    .fadeOut(1000)
 //    .next()
 //    .fadeIn(1000)
 //    .end()
 //    .appendTo('#view-home-slideshow');
	// },  2000);





	




    return (

    <div className="view-home-slideshow">

      <h1>Martin Nash Placeholder</h1>

      <playArrow/>

      <div>
      <img className="view-home-IMG-SPACE" src="./images/antoineproulx4.png"/>
      </div>

      <div>
      <img className="view-home-IMG-SPACE" src="./images/antoineproulx1.png"/>
      </div>

      <div>
      <img className="view-home-IMG-SPACE" src="./images/antoineproulx6.png"/>
      </div>

      <div>
      <img className="view-home-IMG-SPACE" src="./images/antoineproulx3.png"/>
      </div>

      <div>
      <img className="view-home-IMG-SPACE" src="./images/66.jpg"/>
      </div>

      </div>



  //     	$(document).ready(function(){
		// $('.view-home-slideshow').slick({
  // 		slidesToShow: 1,
  // 		slidesToScroll: 1,
  // 		autoplay: true,
  // 		autoplaySpeed: 2000,
		// });
 	//    });

    )
  }
}






// $(function(){
//     $('#view-home-slideshow img:gt(0)').hide();
//     setInterval(function(){
//       $('#view-home-slideshow :first-child').fadeOut()
//          .next('img').fadeIn()
//          .end().appendTo('#view-home-slideshow');}, 
//       3000);
// });



