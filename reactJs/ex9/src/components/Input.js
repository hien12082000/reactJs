import React from "react";
import input from "../css/input.css";
class Input extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div>
				<input type={this.props.type} placeholder={this.props.placeholder} name={this.props.name}  required />
			</div>
		);
	}
}

export default Input;
