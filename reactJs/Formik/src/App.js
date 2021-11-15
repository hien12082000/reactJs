import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.schema = Yup.object().shape({
			email: Yup.string().email("Email Khong Hop Le").required("Khong Duoc Trong"),
			password: Yup.string().min(2, "Qua Ngan").max(50, "Qua Dai").required("Khong Duoc Trong"),
		});
	}
	render() {
		return (
			<div>
				<Formik
					initialValues={{ email: "", password: "" }}
					// validate={(values) => {
					// 	const errors = {};
					// 	if (values.email.length < 8) {
					// 		errors.email = "Khong Hop Le";
					// 	}
					// 	return errors;
					// }}
					validationSchema={this.schema}
					onSubmit={(values) => {
						console.log(values.email);
						alert(values.password);
					}}
				>
					{({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
						<form onSubmit={handleSubmit}>
							<div>
								<input
									type="text"
									name="email"
									value={values.email}
									onChange={handleChange}
									onBlur={handleBlur}
								/>
								<div className="alert__error">{errors?.email && touched?.email && errors?.email}</div>
							</div>
							<input
								type="password"
								name="password"
								value={values.password}
								onChange={handleChange}
								onBlur={handleBlur}
							/>
							{errors?.password && touched?.password && errors?.password}
							<button type="submit">submit</button>
						</form>
					)}
				</Formik>
			</div>
		);
	}
}

export default App;
