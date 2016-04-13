import React, { Component } from 'react';
import $ from 'jquery';

export default class ViewHome extends Component {
  render() {
    return (

    <div id="view-home-slideshow">

      <h1>View A</h1>

      <div>
      <img className="view-home-IMG-SPACE" src="./images/18 copy.jpg"/>
      </div>

      <div>
      <img className="view-home-IMG-SPACE" src="./images/antoineproulx1.jpg"/>
      </div>

      <div>
      <img className="view-home-IMG-SPACE" src="./images/antoineproulx6.jpg"/>
      </div>

      <div>
      <img className="view-home-IMG-SPACE" src="./images/antoineproulx3.jpg"/>
      </div>

      <div>
      <img className="view-home-IMG-SPACE" src="./images/antoineproulx4.jpg"/>
      </div>

      </div>

    )
  }
}



// $("#view-home-slideshow > div:gt(0)").hide();

// setInterval(function() { 
//   $('#view-home-slideshow > div:first')
//     .fadeOut(1000)
//     .next()
//     .fadeIn(1000)
//     .end()
//     .appendTo('#view-home-slideshow');
// },  2000);


// $(function(){
//     $('#view-home-slideshow img:gt(0)').hide();
//     setInterval(function(){
//       $('#view-home-slideshow :first-child').fadeOut()
//          .next('img').fadeIn()
//          .end().appendTo('#view-home-slideshow');}, 
//       3000);
// });



