import React from 'react';
import {registrationMain} from "../../../redux/reducers/auth-reducer";
import {connect} from "react-redux";
import Main from "./Main";

let mapStateToProps = (state) => ({
	success: state.auth.registration_main_success,
	main_error: state.auth.registration_main_error,
});

let mapDispatchToProps = (dispatch) => {
	return {
		onSubmit: (formData) => dispatch(registrationMain(formData))
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);