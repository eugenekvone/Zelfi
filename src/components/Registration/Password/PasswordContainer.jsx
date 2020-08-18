import React from 'react';
import {registrationPassword} from "../../../redux/reducers/auth-reducer";
import {connect} from "react-redux";
import Password from "./Password";

let mapStateToProps = (state) => ({
	success: state.auth.registration_password_success,
});

let mapDispatchToProps = (dispatch) => {
	return {
		onSubmit: (formData) => dispatch(registrationPassword(formData))
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Password);