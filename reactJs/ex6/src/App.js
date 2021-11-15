import React from "react";
import "./App.css";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleClick = this.handleClick.bind(this);
		this.usernameRef = React.createRef();
		this.passwordRef = React.createRef();
	}

	handleClick(e) {
		e.preventDefault();
		console.log(this.usernameRef);
		console.log(this.passwordRef);
		let username = this.username.current.value;
		let password = this.password.current.value;
		
		const data = {
			username,
			password,
		};
		console.log(data);
	}

	// handleClick() {
	// 	this.setState((prev) => ({
	// 		state.visiable: !prev.visiable
	// 	}));
	// 	this.setState((prev) => {}); // function callback
	// 	console.log(this.state);
	// }
	render() {
		return (
			<div>
				<h2>Login Form</h2>
				<form method="GET" onSubmit={this.handleSubmit}>
					<div className="container">
						<label htmlFor="uname">
							<b>Username</b>
						</label>
						<input type="text" placeholder="Enter Username" name="uname" required ref={this.usernameRef} />
						<label htmlFor="psw">
							<b>Password</b>
						</label>
						<input type="password" placeholder="Enter Password" name="psw" required ref={this.passwordRef} />
						<button type="submit" onClick={this.handleClick}>
							Login
						</button>
						<label>
							<input type="checkbox" defaultChecked="checked" name="remember" /> Remember me
						</label>
					</div>
					<div className="container" style={{ backgroundColor: "#f1f1f1" }}>
						<button type="button" className="cancelbtn">
							Cancel
						</button>
						<span className="psw">
							Forgot <a href="#">password?</a>
						</span>
					</div>
				</form>
			</div>
		);
	}
}

export default App;
