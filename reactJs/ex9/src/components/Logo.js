import React from "react";
import Image from "../images/logo.png";
import logo from "../css/logo.css";
class Logo extends React.Component {
	render(){
		return(
			<div>
				<a>
					<img src={Image}/>
				</a>
			</div>
		)
	}
}

export default Logo;