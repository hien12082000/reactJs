import FontAwesome from "./components/FontAwesome";
import "./App.css";
import "./Body.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(fab, fas);


function App() {
	let data = {
		1: <FontAwesomeIcon icon={["fab", "github"]} />,
		2: <FontAwesomeIcon icon={["fab", "facebook-f"]} />,
		3: <FontAwesomeIcon icon={["fab", "twitter"]} />,
		4: <FontAwesomeIcon icon={["fas", "home"]} /> ,
		5:<FontAwesomeIcon icon={["fas", "user"]} />,
		6: <FontAwesomeIcon icon={["fas", "graduation-cap"]} />,
		7: <FontAwesomeIcon icon={["fas", "briefcase"]} />,
		8: <FontAwesomeIcon icon={["fas", "envelope"]} />,
		9: <FontAwesomeIcon icon={["fas", "chevron-right"]} />,
		10: <FontAwesomeIcon icon={["fas", "chevron-left"]} />,
	};

	let color = {
		1: "#04B4E0",
	};
	const response = {
		data: data,
		color: color,
	};

	return <FontAwesome props={response} />;
}

export default App;
