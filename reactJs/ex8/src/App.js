import React from "react";
import "./App.css";
import axios from "axios";
import image from "./images/1ban-tin-cap-nhat-covid-1629091442.jpg";
// Hoan thanh not hien thi gia tri ra bang
// Tim hieu axios la gi, cach dung nhu the nao, cac tai lieu va khai niem lien quan den axios.
// Viet css component nay

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = { 
			NewConfirmed: "0", 
			TotalConfirmed: "0", 
			NewDeaths: "0", 
			TotalDeaths: "0", 
			NewRecovered: "0", 
			TotalRecovered: "0",
		};
		this.getData = this.getData.bind(this);
	}
	render() {
		return (
			<div id="main">
				<table>
					<thead>
						<tr>
							<th>Information</th>
							<th>Amount</th>
						</tr>
					</thead>

					<tbody>
						<tr>
							<td>NewConfirmed</td>
							<td>{this.state.NewConfirmed}</td>
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
					</tbody>
				</table>
				<div>
					<button onClick={this.getData}>reset</button>
				</div>
			</div>
		);
	}

	componentDidMount() {
		// this.getData();
	}

	getData() {
		axios.get("https://api.covid19api.com/summary").then((result) => {
			let data = result.data;
			let newState = {
				NewConfirmed: data.Global.NewConfirmed,
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
