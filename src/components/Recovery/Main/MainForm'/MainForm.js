import React from "react";
import {reduxForm} from "redux-form";
import ItemInput from "../../../Commons/ItemInput/ItemInput";
import TitleWrapBlock from "../../../Blocks/TitleWrapBlock/TitleWrapBlock";


const MainForm = ({handleSubmit, history, main_error}) => {
	return (
		<form onSubmit={handleSubmit}>
			<div className="form__series-wrap form__series-wrap-6 form__series-wrap-2_adaptive">
				<p className="form__series-title form__series-title-1 text-3 text-4_adaptive form__series-title-1_adaptive">Данные
					для восстановления</p>
				<div className="form__series form__series-1">
					<ItemInput itemInputTitle='E-mail' name='recovery_main_input' input='email'
					           required inputInvalid={main_error}/>
					{main_error &&
					<div className="flex-bottom">
						<TitleWrapBlock title='Пользователь не найден'/>
					</div>
					}
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

const MainReduxForm = reduxForm({form: 'recovery-main'})(MainForm);
export default MainReduxForm;