import React from 'react';
import Title from "../Commons/Title/Title";
import LoginContentContainer from "./LoginContent/LoginContentContainer";


const Login = () => {
	return (
		<div className='content container flex-hor-center'>
			<div>
				<Title title={'Вход'}/>
				<LoginContentContainer/>
			</div>
		</div>
	)
};

export default Login;