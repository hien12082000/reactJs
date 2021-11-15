import { React } from "react";

import "./item.css";
const Item = ({ props }) => {
	return (
		<div>
			<label htmlFor={props}>
				<b>{props}</b>
			</label>
			<input placeholder={props} type="text" id={props}></input>
		</div>
	);
};

export default Item;
