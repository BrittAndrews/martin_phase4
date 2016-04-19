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

						martin@martinnash.com
						<br/>

						<br/>

						or call:
						<br/>

						404-467-6099


					</span>

				</div>
				<img src="./images/adac.jpg" alt="adac"/>
			</div>

		)
	}
}