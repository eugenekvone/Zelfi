import React from 'react';
import style from './Password.module.scss';
import cn from "classnames";
import PasswordReduxForm from "./PasswordForm/PasswordForm";
import {useHistory} from "react-router-dom";


const Password = (props) => {

	const history = useHistory();

	if (props.success) history.push(props.linkNext);

	return (
		<div>
			<p className={cn(style.text, "text-30 text-3_adaptive")}>
				<span>Адрес event@event.ru успешно подтвержден!</span><br></br>
				Создайте пароль для входа в ваш аккаунт
			</p>
			<PasswordReduxForm onSubmit={props.onSubmit}/>
		</div>
	)
};

export default Password;