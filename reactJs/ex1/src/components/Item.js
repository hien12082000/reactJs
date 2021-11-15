import { React, useState, useEffect } from "react";
const Item = ({ props, className }) => {
	
	return (
		<li className={`${className}`}>
			<a href="#">{props}</a>
		</li>
	);
};
export default Item;
