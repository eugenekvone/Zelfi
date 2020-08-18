import React from "react";
import {reduxForm} from "redux-form";
import ItemInput from "../../../Commons/ItemInput/ItemInput";

const PasswordForm = ({handleSubmit}) => {
	return (
		<form onSubmit={handleSubmit}>
			<div className="form__series-wrap form__series-wrap-6 form__series-wrap-2_adaptive">
				<div className="form__series form__series-1">
					<ItemInput itemInputTitle='Пароль'
					           name='password_confirmed_input_1'
					           input='password'
					           required/>
					<ItemInput itemInputTitle='Повторите пароль'
					           itemInputClass='input-item-3'
					           input='password'
					           name='password_confirmed_input_2'
					           password_confirm
					           required/>
				</div>
			</div>
			<div className="form__series form__series-2 form__series-1_adaptive">
				<div className="btn-2 btn btn_height-1">
					<p className="text-7">Отмена</p>
				</div>
				<button className="btn-1 btn btn_height-1 order_-1_adaptive">
					<p className="text-7 text_white">Далее</p>
				</button>
			</div>
		</form>
	)
};

const PasswordReduxForm = reduxForm({form: 'registration_password'})(PasswordForm);
export default PasswordReduxForm;