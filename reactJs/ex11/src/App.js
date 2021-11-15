import logo from "./logo.svg";
import "./css/App.css";
import { Formik } from "formik";
import * as Yup from "yup";
import React, { useState, useEffect, useRef } from "react";

function App() {
	const schema = Yup.object().shape({
		name: Yup.string().min(8, "qua ngan").max(30, "qua dai").required("khong de trong"),
		password: Yup.string().min(8, "qua dai").required("khong de trong").max(30, "qua dai"),
		email: Yup.string().email("khong hop le").min(8, "qua ngan").max(30, "qua dai").required("khong de trong")
	});

	const [isDisable, setDisable] = useState(true);
	const [isVisiable, setVisiable] = useState(true);

	// useRef -> createRef

	const InputEle = useRef();

	const focusEle = () => {
		const value = InputEle.current?.value;
		console.log("VALUE = " + value);
	};

	useEffect(() => {
		console.log("Change");
	});

	// gom 2 phan: ten(visiable) va phuong thuc de thay doi state(setVisiable) (tuong duong vs setState)
	// useState : cos the co hoac ko, la tham so truyen vao useState, gia tri cua tham so day la gia tri ban dau cua state

	// doc lai phan usestate voi effect xem
	return (
		<div id="main">
			<Formik
				initialValues={{ name: "", password: "", email: "" }}
				validationSchema={schema}
				onSubmit={(values) => {
					console.log(values.name);
					console.log(values.password);
					console.log(values.email);
				}}
			>
				{({ values, errors, touched, handleSubmit, handleChange, handleBlur }) => (
					<form onSubmit={handleSubmit}>
						<div className="box">
							<h1 className="title">Login</h1>
							<div className="form">
								<div className="form__content">
									<div className="form__field">
										{/* <FontAwesomeIcon icon={["fas", "user"]} /> */}
										<input
											ref={InputEle}
											type="text"
											name="name"
											value={values.name}
											onChange={handleChange}
											onBlur={handleBlur}
											placeholder="ten tai khoan"
										/>
									</div>
									<div className="tooltip">
										<span className="tooltiptext">
											{errors?.name && touched?.name && errors?.name}
										</span>
									</div>

									<div className="form__field">
										{/* <FontAwesomeIcon icon={["fas", "lock"]} /> */}
										<input
											type="password"
											name="password"
											value={values.password}
											onChange={handleChange}
											onBlur={handleBlur}
											placeholder="mat khau"
										/>
									</div>
									<div className="tooltip">
										<span className="tooltiptext">
											{errors?.password && touched?.password && errors?.password}
										</span>
									</div>

									<div className="form__field">
										{/* <FontAwesomeIcon icon={["fas", "envelope"]} /> */}
										<input
											type="email"
											name="email"
											value={values.email}
											onChange={handleChange}
											onBlur={handleBlur}
											placeholder="email"
										/>
									</div>
									<div className="tooltip">
										<span className="tooltiptext">
											{errors?.email && touched?.email && errors?.email}
										</span>
									</div>
									<div className="form__field">
										<input
											type="button"
											onClick={() => {
												setDisable(!isDisable);
											}}
											value="Change State"
											disabled={!isDisable}
										/>
										<input
											type="button"
											onClick={() => {
												setDisable(!isDisable);
											}}
											value="Submit"
											disabled={isDisable}
										/>
									</div>
									<div className="form__field">
										{isVisiable && (
											<input
												type="button"
												onClick={() => {
													setVisiable(!isVisiable);
												}}
												value="Change State"
											/>
										)}
										{!isVisiable && (
											<input
												type="button"
												onClick={() => {
													setVisiable(!isVisiable);
												}}
												value="Submit"
											/>
										)}
									</div>
									<div>
										<button onClick={focusEle()}>Focus</button>
									</div>
								</div>
							</div>
						</div>
					</form>
				)}
			</Formik>
		</div>
	);
}

export default App;
