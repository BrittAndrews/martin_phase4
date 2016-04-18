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
   let { link } = this.props.data[this.currentManuIndex].link;
   return (
     <div style={{width: '100%', height: '100vh', backgroundImage: `url(${image})`, backgroundSize: 'cover', position: 'relative'}}>
       <a href={ link }>{ this.props.data[this.currentManuIndex].manu }</a>
       <button style={{position: 'absolute', left: 20, top: '50vh'}} onClick={() => this.setState({image: this.prevImage()})}>←</button>
       <button style={{position: 'absolute', right: 20, top: '50vh'}}  onClick={() => this.setState({image: this.nextImage()})}>→</button>
       <button  style={{position: 'absolute', left: '50%', bottom: 20}}  onClick={() => this.setState({image: this.nextManu()})}>↓</button>
     </div>
   )
 }

}







