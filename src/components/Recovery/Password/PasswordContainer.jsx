import React from 'react';
import {recoveryPassword} from "../../../redux/reducers/auth-reducer";
import {connect} from "react-redux";
import Password from "./Password";

let mapStateToProps = (state) => ({
	success: state.auth.recovery_password_success,
});

let mapDispatchToProps = (dispatch) => {
	return {
		onSubmit: (formData) => dispatch(recoveryPassword(formData))
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Password);