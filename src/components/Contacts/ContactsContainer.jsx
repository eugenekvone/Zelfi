import React from 'react';
import {connect} from "react-redux";
import Contacts from "./Contacts";
import {sendCallback, setCallback} from "../../redux/reducers/public-reducer";

const ContactsContainer = (props) => {
	return <Contacts onSubmit={props.onSubmit} success={props.success} setCallback={props.setCallback}/>
}

let mapStateToProps = (state) => ({
	success: state.public.callback_success,
});

let mapDispatchToProps = (dispatch) => {
	return {
		onSubmit: (formData) => dispatch(sendCallback(formData)),
		setCallback: (callback) => dispatch(setCallback(callback)),
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactsContainer);