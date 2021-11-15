import React from "react";
import logo from "../logo.svg";
import Item from "./Item";

const Login = ({ props }) => {
	return (
		<div className="login">
			<img src={logo} />

			<div className="input">
				<Item props={props.data[1]} />
				<Item props={props.data[2]}/>
				<input className="submit" type="submit" value="submit" />
				<span>
					<input className="remember" type="checkbox" name="remember" />
					<h3>Remember me</h3>
				</span>
			</div>
		</div>
	)
}

export default Login;
