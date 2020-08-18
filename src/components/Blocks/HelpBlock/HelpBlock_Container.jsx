import React from 'react';
import {connect} from "react-redux";
import HelpBlock from "./HelpBlock";
import {submit} from 'redux-form';
import {setRequisite} from "../../../redux/reducers/methods-reducer";

let mapStateToProps = (state) => ({
	data_dates: state.create_activity.data_dates,
	success: state.methods.requisite,
});

let mapDispatchToProps = (dispatch) => {
	return {
		submitForm: (formName) => dispatch(submit(formName)),
		setRequisite: (formName) => dispatch(setRequisite(formName))
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(HelpBlock);