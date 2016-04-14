import React, { Component } from 'react';
import { render } from 'react-DOM';
import { Link } from 'react-router';
import LeftNav from 'material-ui/lib/left-nav';
import MenuItem from 'material-ui/lib/menus/menu-item';
import RaisedButton from 'material-ui/lib/raised-button';
import HamburgerIcon from 'material-ui/lib/svg-icons/navigation/menu';



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
          <RaisedButton
            label= {<HamburgerIcon />}
            onClick={::this.handleToggle}
          />

          <LeftNav
            docked={false}
            width={200}
            open={this.state.open}
            onRequestChange={open => this.setState({open})}
           >

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


          </LeftNav>

          <Link to="/">
            <img className="logo" src="./images/martin_nash_logo.jpg" alt="nashlogo"/>
          </Link>


          {this.props.children}

        </div>
    );
  }
}



