import React from "react";
class Name extends React.Component {
	constructor(props) {
		super(props);
		// this.state = {name : "sara"}

		this.state = {
			name: {
				firstName: "sa",
				lastName: "ra",
			},
		};

		this.updateName = this.updateName.bind(this);
	}
		// componentWillMount
		// - dk cac sk toan cuc
		// -dua vap prop de thay lai state de
		// -do thoi gian ngan nen ko call api, thay doi state prop de ko lam sai gia tri
	updateName() {
		this.setState(() => ({
			name: {
				firstName: "sa update",
				lastName: "ra update",
			},
		}));
	}

	render() {
		return (
			
			<div>
				<h1>hello, {this.state.name.firstName}</h1>

				<button onClick={this.updateName}>Click</button>
			</div>
		);
	}
}

export default Name;
