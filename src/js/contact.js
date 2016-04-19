import React, { Component } from 'react';
import { render } from 'react-DOM';



export default class Contact extends Component {

	render(){
		return(

			<div className="contact-wrapper">


				<div className="contact-flex">

					
					<h3>The Martin Nash Showroom is located at the</h3>


					<h2><br/><b>
					<a href="http://adacatlanta.com/">
					ADAC
					</a>
					</b><br/></h2>

					<span>351 Peachtree Hills Ave, Suite 308
					in Atlanta, GA 30305. 
						<br/>
						<br/>
						<br/>


						For more information, please email us at:
						<br/>

						<b>martin@martinnash.com</b>
						<br/>

						<br/>

						or call:
						<br/>

						<b>404-467-6099</b>



					</span>
					</div>

	


				 <img src="./images/dontlikeordinary.png" alt="adac"/>
			</div>

		)
	}
}
						// <div className="adac-img">
						// 	<img src="./images/adac2.jpg" alt="adac"/>
						// </div>