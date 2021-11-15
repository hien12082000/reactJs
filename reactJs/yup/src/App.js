import "./App.css";
import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import image from "./images/screen-5.jpg";
library.add(fab, fas);
class App extends React.Component {
	constructor(props) {
		super(props);
		this.schema = Yup.object().shape({
			name: Yup.string().min(8, "qua ngan").max(30, "qua dai").required("khong de trong"),
			password: Yup.string().min(8, "qua dai").required("khong de trong").max(30, "qua dai"),
			email: Yup.string().email("khong hop le").min(8, "qua ngan").max(30, "qua dai").required("khong de trong")
		});
	}
	render() {
		return (
			<div id="main">
				<Formik
					initialValues={{ name: "", password: "", email: "" }}
					validationSchema={this.schema}
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
												type="text"
												name="name"
												value={values.name}
												onChange={handleChange}
												onBlur={handleBlur}
												placeholder="ten tai khoan"
											/>
										</div>
										<div clasName="tooltip">
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
										<div clasName="tooltip">
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
										<div clasName="tooltip">
											<span className="tooltiptext">
												{errors?.email && touched?.email && errors?.email}
											</span>
										</div>
										<div className="form__field">
											<input type="submit" onclick="send()" value="Submit" />
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
}

export default App;
