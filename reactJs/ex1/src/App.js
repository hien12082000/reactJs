
import "./App.css";
import Menu from "./components/Menu";

function App() {
	let data = {
		1: "Link 1",
		2: "Link 2",
		3: "Link 3",
	};

	let color = {
		1: "red",
		2: "green",
		3: "blue",
	};

	const response = {
		data: data,
		color: color,
	};

	return <Menu props={response} />;
}

export default App;
