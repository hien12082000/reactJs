// import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Name from "./components/Name"; // import component

// khai bao component bang cach viet function
// es5
// function App() {
// 	return <Name name="abc" />; // return ve component Name, truyen vao 1 prop la name, co gia tri la Sara
// }

// es6
// const App2 = () => {
// 	return <></>;
// };

class App extends React.Component {
	render() {
		return(
			<Name name="abc"/>
		)
	}
}
export default App;
