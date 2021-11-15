import React from "react";

import Item from "./Item";
import "../App.css";
import "../Body.css";
import image from "../images/hien.jpg";
const FontAwesome = ({ props }) => {
	return (
		<div>
			{/* HEADER */}
			<div id="header" />
			{/* END HEADER */}
			{/* MAIN */}
			<div id="main">
				<div className="main__content">
					<div className="main__content__left">
						<div className="main__content__left__top">
							<div className="main__content__left__top__img">
								<img src={image} />
							</div>
						</div>
						<div className="main__content__left__bottom">
							<div>
								<h3>Hoàng Ngọc Hiển</h3>
							</div>
							<div>
								<h4>Web Designer</h4>
							</div>
							<div className="main__content__left__contacts">
							<Item props={props.data[1]} className={props.color[1]} />
							<Item props={props.data[2]} className={props.color[1]} />
							<Item props={props.data[3]} className={props.color[1]} />
							</div>
						</div>
					</div>
					<div className="main__content__right">
						<div>
							<h1>Hoàng Ngọc Hiển</h1>
							<h2>Web Designer</h2>
						</div>
					</div>
				</div>
				<div className="main__tools">
					<div className="main__tools__top">
						<div>
						<Item props={props.data[4]} className={props.color[1]} />
							<span className="tooltiptext">Home</span>
						</div>
						<div>
						<Item props={props.data[5]} className={props.color[1]} />
							<span className="tooltiptext">About me</span>
						</div>
						<div>
						<Item props={props.data[6]} className={props.color[1]} />
							<span className="tooltiptext">Education</span>
						</div>
						<div>
						<Item props={props.data[7]} className={props.color[1]} />
							<span className="tooltiptext">Experience</span>
						</div>
						<div>
						<Item props={props.data[8]} className={props.color[1]} />
							<span className="tooltiptext">Contact</span>
						</div>
					</div>
					<div className="main__tools__bottom">
						<div>
						<Item props={props.data[9]} className={props.color[1]} />
							<span className="tooltiptext">next</span>
						</div>
						<div>
						<Item props={props.data[10]} className={props.color[1]} />
							<span className="tooltiptext">previous</span>
						</div>
					</div>
				</div>
			</div>
			{/* END MAIN */}
			{/* FOOTER */}
			<div id="footer" />
			{/* END FOOTER */}
		</div>
	);
};

export default FontAwesome;
