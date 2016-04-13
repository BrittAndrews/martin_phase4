import React, { Component } from 'react';
import { Link } from 'react-router';
import LeftNav from 'material-ui/lib/left-nav';
import MenuItem from 'material-ui/lib/menus/menu-item';
import RaisedButton from 'material-ui/lib/raised-button';
import AppBar from 'material-ui/lib/app-bar';
import HamburgerIcon from 'material-ui/lib/svg-icons/Navigation/menu';





// export default class LeftNavOpenRightExample extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {open: false};
//   }

//   handleToggle = () => this.setState({open: !this.state.open});

//   render() {
//     return (
//       <div>
//         <RaisedButton
//           label="Toggle LeftNav"
//           onTouchTap={this.handleToggle}
//         />
//         <LeftNav width={200} openRight={true} open={this.state.open} >
//           <AppBar title="AppBar"/>
//         </LeftNav>
//       </div>

//       {this.props.children}
//     );
//   }
// }






/////////try to with docked material ui left nav//////////////////////

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
              <MenuItem onClick={::this.handleClose}>Home</MenuItem>
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

            <Link className="home-nav" to="/externallink">
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



/////////////////////////////////////////////////original


//   render() {

//     return (
//       <div className="main-component">

        
//         <LeftNav>
//           <Link className="home-nav" to="/about">Home</Link>
//           <Link className="home-nav" to="/furniture">Furniture</Link>
//           <Link className="home-nav" to="/lighting">Lighting</Link>
//           <Link className="home-nav" to="/wallcoverings">Wall Coverings</Link>
//           <Link className="home-nav" to="/textiles">Textiles</Link>
//           <Link className="home-nav" to="/contact">Contact</Link>
//           <Link className="home-nav" to="/externallink">Contact</Link>
//         </LeftNav>

//         <Link to="/">
//         <img className="logo" src="./images/martin_nash_logo.jpg" alt="nashlogo"/>
//         </Link>

//         {this.props.children}


//       </div>
//     )
//   }
// }


