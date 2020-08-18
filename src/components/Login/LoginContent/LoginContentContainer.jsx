import React from 'react';
import {login} from "../../../redux/reducers/auth-reducer";
import {connect} from "react-redux";
import LoginContent from "./LoginContent";

let mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth,
	error: state.auth.login_error,
});

let mapDispatchToProps = (dispatch) => {
	return {
		onSubmit: (formData) => dispatch(login(formData))
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContent);