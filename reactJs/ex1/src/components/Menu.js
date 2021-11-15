import React from "react";

import Item from "./Item";

const Menu = ({ props }) => {
	return (
		<ul>
			<Item props={props.data[1]} className={props.color[1]} />
			<Item props={props.data[2]} className={props.color[2]} />
			<Item props={props.data[3]} className={props.color[3]} />

			<li className="dropdown">
				<a href="#" className="dropbtn">
					Dropdown
				</a>
				<div className="dropdown-content">
					<a href="#">Link 1</a>
					<a href="#">Link 2</a>
					<a href="#">Link 3</a>
				</div>
			</li>
		</ul>
	);
};

export default Menu;
