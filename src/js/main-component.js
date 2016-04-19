import React, { Component } from 'react';
import { render } from 'react-DOM';
import { Link } from 'react-router';
import LeftNav from 'material-ui/lib/left-nav';
import MenuItem from 'material-ui/lib/menus/menu-item';
import RaisedButton from 'material-ui/lib/raised-button';
import HamburgerIcon from 'material-ui/lib/svg-icons/navigation/menu';
import BackgroundTransition from './background-transition';


export default class MainComponent extends Component {

    constructor(props) {
    super(props);
    this.state = {open: false};
    }

    handleToggle = () => this.setState({open: !this.state.open});

    handleClose = () => this.setState({open: false});


      render() {
      return (
         <div className="main-component">

         <div className="gallery">
            {this.props.children}
         </div>



        <RaisedButton className="raised-button"
          onClick={this.handleToggle}
        >
            <b><HamburgerIcon/> </b>

        </RaisedButton>

          <LeftNav
            docked={false}
            width={200}
            open={this.state.open}
            onRequestChange={open => this.setState({open})}
           >

            <Link className="home-nav" to="/">
              <MenuItem onClick={::this.handleClose}>Home</MenuItem>
            </Link>

            <Link className="home-nav" to="/about">
              <MenuItem onClick={::this.handleClose}>About</MenuItem>
            </Link>

            <Link className="home-nav" to="/furniture">
              <MenuItem onClick={::this.handleClose}>Furniture</MenuItem>
            </Link>

            <Link className="home-nav" to="/lighting">
             <MenuItem onClick={::this.handleClose}>Lighting</MenuItem>
            </Link>

            <Link className="home-nav" to="/wallcoverings">
             <MenuItem onClick={::this.handleClose}>Wall Coverings</MenuItem>
            </Link>

            <Link className="home-nav" to="/textiles">
             <MenuItem onClick={::this.handleClose}>Textiles</MenuItem>
            </Link>

            <Link className="home-nav" to="/contact">
              <MenuItem onClick={::this.handleClose}>Contact</MenuItem>
            </Link>

            <div className="social-icons">

             <Link to="https://www.facebook.com/martin.nash.73">
               <img className="facebook" src="https://cdn3.iconfinder.com/data/icons/free-social-icons/67/facebook_circle_black-128.png" alt="nashlogo"/>
            </Link>

            <Link to="https://twitter.com/martinnashadac">
             <img className="twitter" src="http://image005.flaticon.com/67/png/128/69/69480.png" alt="nashlogo"/>
           </Link>

             <Link to="https://www.instagram.com/martin.nash/">
             <img className="instagram" src="http://image005.flaticon.com/67/png/512/69/69366.png" alt="nashlogo"/>
           </Link>
           </div>


          </LeftNav>


           <Link to="/">
            <img className="logo" src="./images/martin_nash_logo.jpg" alt="nashlogo"/>
          </Link>

          

        </div>
    );
  }
}







          // <div className="social-icons-wrapper">

          // <div className="social-icons">

          // <Link to="https://www.facebook.com/martin.nash.73">
            // <img className="facebook" src="https://cdn3.iconfinder.com/data/icons/free-social-icons/67/facebook_circle_black-128.png" alt="nashlogo"/>
          // </Link>

           // <Link to="https://twitter.com/martinnashadac">
            // <img className="twitter" src="http://image005.flaticon.com/67/png/128/69/69480.png" alt="nashlogo"/>
          // </Link>

          //   <Link to="https://www.instagram.com/martin.nash/">
          //   <img className="instagram" src="http://image005.flaticon.com/67/png/512/69/69366.png" alt="nashlogo"/>
          // </Link>

          
          // </div>
          // </div>
