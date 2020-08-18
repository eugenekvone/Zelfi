import React from 'react';
import PasswordReduxForm from "./PasswordForm/PasswordForm";
import {useHistory} from "react-router-dom";

const Password = (props) => {

	const history = useHistory();

	if (props.success) history.push(props.linkNext);

	return <PasswordReduxForm onSubmit={props.onSubmit} history={history}/>
};

export default Password;