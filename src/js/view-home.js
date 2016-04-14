import React, { Component } from 'react';
import $ from 'jquery';
import PlayArrow from 'material-ui/lib/svg-icons/av/play-arrow';
import Slider from 'react-slick';

export default class ViewHome extends Component {
  render() {


    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };



    return (

    <div className="view-home-slideshow">

      <h1>Martin Nash Placeholder</h1>




       <Slider {...settings}>
        <div><h3>
          <img src="./images/antoineproulx4.png"/>
              </h3></div>

        <div><h3>
          <img  src="./images/antoineproulx1.png"/>
              </h3></div>

        <div><h3>
          <img src="./images/antoineproulx2.png"/>
              </h3></div>


        <div><h3>
          <img src="./images/antoineproulx6.png"/>
              </h3></div>

        <div><h3>
          <img src="./images/antoineproulx3.png"/>
              </h3></div>



        <div><h3>2</h3></div>
        <div><h3>3</h3></div>
        <div><h3>4</h3></div>
        <div><h3>5</h3></div>
        <div><h3>6</h3></div>
      </Slider>




    </div>

    )
  }
}














