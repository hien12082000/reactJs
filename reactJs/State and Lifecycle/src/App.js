import React from "react";
import axios from "axios";
import "./App.css";
class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = { state: "Default" };
	}
	render() {
		return (
			<div>
				<table>
					<tr>
						<th>Information</th>
						<th>Amount</th>
					</tr>
					<tr>
						<td>NewConfirmed</td>
						<td>{this.state.state}</td>
					</tr>
					<tr>
						<td>TotalConfirmed</td>
						<td>{this.state.TotalConfirmed}</td>
					</tr>

					<tr>
						<td>NewDeaths</td>
						<td>{this.state.NewDeaths}</td>
					</tr>
					<tr>
						<td>TotalDeaths</td>
						<td>{this.state.TotalDeaths}</td>
					</tr>
					<tr>
						<td>NewRecovered</td>
						<td>{this.state.NewRecovered}</td>
					</tr>
					<tr>
						<td>TotalRecovered</td>
						<td>{this.state.TotalRecovered}</td>
					</tr>
				</table>
			</div>
		);
	}

	componentDidMount() {
		let endpoint = "https://api.covid19api.com/summary";
		axios.get(endpoint).then((response) => {
			let data = response.data;
			let newState = {
				state: data.Global.NewConfirmed,
				TotalConfirmed: data.Global.TotalConfirmed,
				NewDeaths: data.Global.NewDeaths,
				TotalDeaths: data.Global.TotalDeaths,
				NewRecovered: data.Global.NewRecovered,
				TotalRecovered: data.Global.TotalRecovered,
			};
			this.setState(newState);
		});
	}
}

export default App;
