import React, { Component, PropTypes } from 'react';
import $ from 'jquery';


// let currentManuIndex = 0;
// let currentImageIndex = 0;

// function getCurrentImage() {
//  var manuCount = data.length;
//  if (currentManuIndex < 0) {
//    currentManuIndex = 0;
//  }
//  var obj = data[Math.min(currentManuIndex, manuCount-1)];
//  var imageCount = obj.images.length;
//  if (currentImageIndex < 0) {
//    currentImageIndex = 0;
//  }
//  var img = obj.images[Math.min(currentImageIndex, imageCount-1)];
//  return img;
// }

// function nextImage() {
//  currentImageIndex++
//  return getCurrentImage();
// }

// function prevImage() {
//  currentImageIndex--;
//  return getCurrentImage();
// }

// function nextManu() {
//  currentManuIndex++;
//  currentImageIndex = 0;
//  return getCurrentImage();
// }




export default class ImageNavigation extends Component {

  static propTypes = {
    data: PropTypes.array.isRequired
  }

 constructor(...args) {
   super(...args);
   this.state = { image: [] }

   this.currentManuIndex = 0;
   this.currentImageIndex = 0;
 }

 componentWillMount() {
  this.setState({image: this.getCurrentImage()})
 }

  nextImage() {
   this.currentImageIndex++
   return this.getCurrentImage();
  }

  prevImage() {
   this.currentImageIndex--;
   return this.getCurrentImage();
  }

  nextManu() {
   this.currentManuIndex++;
   this.currentImageIndex = 0;
   return this.getCurrentImage();
  }

  // nextManu() {
  //   if (this.currentManuIndex = 0){
  //       this.currentManuIndex++;
  //       this.currentImageIndex = 0;
  //       return this.getCurrentImage();
  //     }else {return this.getCurrentImage()};
  // }

  upManu() {
   this.currentManuIndex--;
   this.currentImageIndex = 0;
   return this.getCurrentImage();

  }

 getCurrentImage() {
    let {data} = this.props;
    var manuCount = data.length;
    if (this.currentManuIndex < 0) {
     this.currentManuIndex = 0;
    }
    var obj = data[Math.min(this.currentManuIndex, manuCount-1)];
    var imageCount = obj.images.length;
    if (this.currentImageIndex < 0) {
     this.currentImageIndex = 0;
    }
    var img = obj.images[Math.min(this.currentImageIndex, imageCount-1)];
    return img;
  }

  render() {
   let { image }  = this.state;
   let { link, manu, cat, para, location } = this.props.data[this.currentManuIndex];
   return (
    <div className="gallery-wrapper">

       <div className="manufacturers-box">
        <div className="manufacturers-flex">
          <div className="gallery-cat"> { cat } </div>
          <br/>
          <a className="manu-link" href={ link }>{ manu }</a>
          <div className="gallery-location"> { location } </div>
          <br/>
          <div className="gallery-para"> { para } </div>
          <br/>

       <button className="left-button" onClick={() => this.setState({image: this.prevImage()})}> ◀︎ </button>
       <button className="right-button" onClick={() => this.setState({image: this.nextImage()})}>▶︎ </button>
       <button className="up-button" onClick={() => this.setState({image: this.upManu()})}>  ▲<br/><span className="prev">PREV<br/> VENDOR</span>  </button>
       <button className="down-button" onClick={() => this.setState({image: this.nextManu()})}> <span className="next">NEXT<br/> VENDOR</span> <br/> ▼ </button>
        </div>
       </div>
       <div className="image-nav-wrapper" style={{ backgroundImage: `url(${image})`}}>
       

     </div>
     </div>

   )
 }

}



//   render() {
//    let { image }  = this.state;
//    let { link, manu, cat, para, location } = this.props.data[this.currentManuIndex];
//    return (
//     <div className="gallery-wrapper">

//        <div className="manufacturers-box">
//         <div className="manufacturers-flex">
//           <div className="gallery-cat"> { cat } </div>
//           <br/>
//           <a className="manu-link" href={ link }>{ manu }</a>
//           <div className="gallery-location"> { location } </div>
//           <br/>
//           <div className="gallery-para"> { para } </div>
//           <br/>
//         </div>
//        </div>
//        <div className="image-nav-wrapper" style={{ backgroundImage: `url(${image})`}}>
       

//        <button className="left-button" onClick={() => this.setState({image: this.prevImage()})}> ◀︎ </button>
//        <button className="right-button" onClick={() => this.setState({image: this.nextImage()})}>▶︎ </button>
//        <button className="up-button" onClick={() => this.setState({image: this.upManu()})}>  ▲<br/><span className="prev">PREV<br/> VENDOR</span>  </button>
//        <button className="down-button" onClick={() => this.setState({image: this.nextManu()})}> <span className="next">NEXT<br/> VENDOR</span> <br/> ▼ </button>

//      </div>
//      </div>

//    )
//  }

// }





