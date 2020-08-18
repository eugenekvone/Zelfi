import React from 'react';
import LoginReduxForm from "./LoginForm/LoginForm";
import SocialBlock from "../../Blocks/SocialBlock/SocialBlock";


const LoginContent = (props) => {

	if (props.isAuth) props.close();

	return (
		<div>
			<SocialBlock/>
			<LoginReduxForm onSubmit={props.onSubmit}
			                login_error={props.error}
			                close={props.close}/>
		</div>
	)
};

export default LoginContent;