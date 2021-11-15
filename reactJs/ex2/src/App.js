import logo from "./logo.svg";
import "./App.css";

import Link from "./components/Link";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
			</header>
			<div>
				<Link />
				<Link />
				<Link />
				<Link />
			</div>
		</div>
	);
}

export default App;
