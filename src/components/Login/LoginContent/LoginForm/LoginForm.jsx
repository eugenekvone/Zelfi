import React from "react";
import {reduxForm} from "redux-form";
import ItemInput from "../../../Commons/ItemInput/ItemInput";
import TitleWrapBlock from "../../../Blocks/TitleWrapBlock/TitleWrapBlock";
import BtnLink from "../../../Commons/Btns/BtnLink/BtnLink";


const LoginForm = ({handleSubmit, close, login_error}) => {
	return (
		<form onSubmit={handleSubmit}>
			<div className="form__series-wrap form__series-wrap-8">
				<div className="form__series form__series-3 form__series_row-gap-1">
					<ItemInput name='login_input_1' itemInputTitle='E-mail' input='email' required/>
					{login_error &&
					<div className='flex-bottom'>
						<TitleWrapBlock title={'Пользователь не найден'}/>
					</div>
					}
					<ItemInput name='login_input_2' itemInputTitle='Пароль' itemInputClass='input-item-3' required
					           input='password'/>
				</div>
			</div>
			<div className="form__series-wrap form__series-wrap-8">
				<div onClick={close && close}>
					<BtnLink title={'Восстановление пароля'}
					         link={'/recovery'}
					         textClass={'text_underline'} block_none/>
				</div>
			</div>
			<div className="form__series form__series-3 form__series-1_adaptive">
				<div className="btn-2 btn btn_height-1" onClick={close}>
					<p className="text-7">Отмена</p>
				</div>
				<button className="btn-1 btn btn_height-1 order_-1_adaptive">
					<p className="text-7 text_white">Войти</p>
				</button>
			</div>
		</form>
	)
};

const LoginReduxForm = reduxForm({form: 'login-modal'})(LoginForm);
export default LoginReduxForm;