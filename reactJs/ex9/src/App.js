import "./App.css";
import Logo from "./components/Logo";
import React from "react";
// import { FaBeer } from "react-icons/fa";
import { HiMenu } from "react-icons/hi";
import Background from "./components/Background";
import Input from "./components/Input";
class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			
		};
		this.click = this.click.bind(this);
		this.username = React.createRef(); // element
		this.password = React.createRef();
	}

	click(){
		let username = this.username.current.value;
		let password = this.password.current.value;
		const data = {
			username,
			password,
		};
		console.log(data);
	}
	render() {
		
		return (
			<div id="all">
				<Background />
				<div className="header">
					<Logo />
					<button type="button" className="menu">
						<HiMenu />
					</button>
				</div>

				<div className="main">
					<div className="container">
						<h2>Login</h2>
						<div className="login">
							<label for="uname">
								<h3>Username:</h3>
							</label>
							<input type="text" placeholder="email@domain.com" name="uname" ref={this.username} required />
							{/* <Input type="text" placeholder="email@domain.com" name="uname" /> */}
							<label for="psw">
								<h3>Password:</h3>
							</label>
							<input type="password" placeholder="********" name="psw" ref={this.password} required />
							{/* <Input type= "text" placeholder="********" name="psw"/> */}
							<button onClick={this.click} className="btn" type="submit">
								Login
							</button>
						</div>
					</div>
				</div>

				<div className="bottom"></div>
			</div>
		);
	}
}

export default App;
