import { React, useState, useEffect } from "react";
const Item = ({ props, className }) => {

	return (
		
		<div className={`${className}`}>
			<a href="#">{props}</a>
		</div>
	);
};
export default Item;
