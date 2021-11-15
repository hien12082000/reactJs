/* eslint-disable jsx-a11y/alt-text */
import Image from "../images/night-sky.jpeg";
import React from "react";
import logo from "../css/background.css";
// background
// c1: sd thuoc tinh bg images(uu diem: nhanh, de lam/ nhuoc diem: ko viet css cho anh day dc)
//c2: dung 1 the image dat position cho no de thay the bg bang j the img (uu diem: viet dc css cho anh/ nhuoc diem: kho lam hown cach kia, suy nghi sao cho dep)
class Background extends React.Component {
	render() {
		return (
			<div className="background">
				<img className="img" src={Image} />
			</div>
		);
	}
}
export default Background;
