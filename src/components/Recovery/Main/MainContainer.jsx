import React from 'react';
import {recoveryMain} from "../../../redux/reducers/auth-reducer";
import {connect} from "react-redux";
import Main from "./Main";


let mapStateToProps = (state) => ({
	success: state.auth.recovery_main_success,
	error: state.auth.recovery_main_error,
});

let mapDispatchToProps = (dispatch) => {
	return {
		onSubmit: (formData) => dispatch(recoveryMain(formData))
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);