
// import logo2 from "./logo2.jpg";

import "./App.css";
import "./login.css";
import Login from "./components/Login";
function App() {
	let data = {
		1: "ten tai khoan",
		2: "mat khau",
	};
	let color = {
		1: "red",
		2: "green",
	};

	const response = {
		data: data,
		color: color,
	};

	return <Login props={response} />;
}

// Dung class - Code react voi class hoac oop

export default App; // ES6

// module.exports = {App}
