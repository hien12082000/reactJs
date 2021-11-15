import React from "react";
import ReactDOM from "react-dom";
import App from "./app/App";
import reportWebVitals from "./reportWebVitals";
// import "./dist/css/site.min.css";
import "./scss/App.scss";
import "./scss/Banner.scss";
import "./scss/index.scss";
import "./scss/Nav.scss";
import "./scss/Row.scss";

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
