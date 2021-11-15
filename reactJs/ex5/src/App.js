import React from "react";
import "./App.css";
class App extends React.Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleClick = this.handleClick.bind(this);
		this.username = React.createRef(); // usernameElement
		this.password = React.createRef();

		this.handlebtn1 = this.handlebtn1.bind(this);
		this.handlebtn2 = this.handlebtn2.bind(this);

		this.state = {
			visiable: true,
			var1: false,
			var2: false,
		};
	}

	handleSubmit(e) {
		e.preventDefault();
		let username = this.username.current.value;
		let password = this.password.current.value;
		const data = {
			username,
			password,
		};
		console.log(data);
	}

	handleClick() {
		this.setState((prev) => ({
			visiable: !prev.visiable,
		}));
		console.log(this.state);
	}

	handlebtn1() {
		this.setState(() => ({
			var1: true,
			var2: false,
		}));
	}

	handlebtn2() {
		this.setState(() => ({
			var1: false,
			var2: true,
		}));
	}

	render() {
		return (
			<div className="btn">
				<form method="GET" onSubmit={this.handleSubmit}>
					<h2>Username</h2>
					<input type="text" ref={this.username} />
					<h2>Password</h2>
					<input type="text" ref={this.password} />
					{this.state.visiable == true ? (
						<div>
							<h1>Tag IMG</h1>
						</div>
					) : (
						<></>
					)}
					<div>
						<button onClick={this.handleClick}>Submit</button>
					</div>
				</form>

				<div>
					{this.state.var1 == true ? <h1>1</h1> : <></>}
					{this.state.var2 == true ? <h1>2</h1> : <></>}
					<button onClick={this.handlebtn1}>1</button>
					<button onClick={this.handlebtn2}>2</button>
				</div>
			</div>
		);
	}
}
export default App;
