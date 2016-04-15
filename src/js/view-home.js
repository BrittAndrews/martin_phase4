import React, { Component } from 'react';
import $ from 'jquery';
import BackgroundTransition from './background-transition';
import Paper from 'material-ui/lib/paper';




export default class ViewHome extends Component {
   render() {
    return(


           <BackgroundTransition
            images={[
              './images/14.jpg',
              './images/66.jpg',
              './images/2.jpg',
              './images/8.jpg',
              './images/11.jpg',
              './images/15.jpg',
              './images/16.jpg',
              './images/17.jpg',
              './images/18.jpg'

            ]}
          /> 
        )
      }
    }










































// export default class ViewHome extends Component {
//   render() {

//     return(
//       <div className="slideshow">
//       </div>
//       )


//      }
// }



  
//     var state = {
//       currentSlide: 0,
//        data        : data
//     }
     



//    var data = [
//     {
//       id         : "slide1",
//       imagePath  : "./images/66.jpg",
//       imageAlt   : "Slide 1 Image",
//       title      : "Slide 1",
//       subtitle   : "Slide 1 Image SubTitle",
//       text       : "Slide 1 Image Text",
//       action     : "Slide 1 Image Action",
//       actionHref : "href"
//     },
//     {
//       id         : "slide2",
//       imagePath  : "./images/antoineproulx1.png",
//       imageAlt   : "Slide 2 Image",
//       title      : "Slide 2",
//       subtitle   : "Slide 2 Image SubTitle",
//       text       : "Slide 2 Image Text",
//       action     : "Slide 2 Image Action",
//       actionHref : "href"
//    },
//    {
//       id         : "slide3",
//       imagePath  : "./images/antoineproulx2.png",
//       imageAlt   : "Slide 3 Image",
//       title      : "Slide 3",
//       subtitle   : "Slide 3 Image SubTitle",
//       text       : "Slide 3 Image Text",
//       action     : "Slide 3 Image Action",
//       actionHref : "href"
//     }  ,
//   ];



    // return (

    // <div className="view-home-slideshow">



    //    <Slider {...settings}>
    //     <div><h3>
    //       <img src="./images/66.jpg"/>
    //           </h3></div>

    //     <div><h3>
    //       <img  src="./images/antoineproulx1.png"/>
    //           </h3></div>

    //     <div><h3>
    //       <img src="./images/antoineproulx2.png"/>
    //           </h3></div>


    //     <div><h3>
    //       <img src="./images/antoineproulx6.png"/>
    //           </h3></div>

    //     <div><h3>
    //       <img src="./images/antoineproulx3.png"/>
    //           </h3></div>

    //     <div><h3>
    //       <img src="./images/66.jpg"/>
    //           </h3></div>

    //     <div><h3>
    //       <img src="./images/5 copy.jpg"/>
    //           </h3></div>

    //     <div><h3>
    //       <img src="./images/3 copy.jpg"/>
    //           </h3></div>

    //     <div><h3>
    //       <img src="./images/8.jpg"/>
    //           </h3></div>

    //   </Slider>




    // </div>












