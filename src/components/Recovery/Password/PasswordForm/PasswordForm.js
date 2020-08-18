import React from "react";
import {reduxForm} from "redux-form";
import ItemInput from "../../../Commons/ItemInput/ItemInput";

const PasswordForm = ({handleSubmit, history}) => {
	return (
		<form onSubmit={handleSubmit}>
			<div className="form__series-wrap form__series-wrap-6 form__series-wrap-2_adaptive">
				<p className="form__series-title form__series-title-1 text-7 text-4_adaptive form__series-title-1_adaptive">Новый
					пароль</p>
				<div className="form__series form__series-1">
					<ItemInput itemInputTitle='Пароль'
					           name='password_confirmed_input_1'
					           required
					           input='password'/>
					<ItemInput itemInputTitle='Повторите пароль'
					           name='password_confirmed_input_2'
					           itemInputClass='input-item-3'
					           password_confirm
					           required
					           input='password'/>
				</div>
			</div>
			<div className="form__series form__series-2 form__series-1_adaptive">
				<div className="btn btn-2 btn_height-1" onClick={history.goBack}>
					<p className="text-7">Назад</p>
				</div>
				<button className="btn btn-1 btn_height-1 order_-1_adaptive">
					<p className="text-7 text_white">Далее</p>
				</button>
			</div>
		</form>
	)
}

const PasswordReduxForm = reduxForm({form: 'recovery-password'})(PasswordForm);
export default PasswordReduxForm;