import React from "react";
import {reduxForm} from "redux-form";
import ItemInput from "../../../Commons/ItemInput/ItemInput";
import Checkbox from "../../../Commons/Checkbox/Checkbox";
import TitleWrapBlock from "../../../Blocks/TitleWrapBlock/TitleWrapBlock";
import {connect} from "react-redux";


const MainForm = ({handleSubmit, main_error, close}) => {
	return (
		<form onSubmit={handleSubmit}>
			<div className="form__series-wrap form__series-wrap-8 form__series-wrap-1_adaptive">
				<p className="form__series-title form__series-title-3 text-7">Или с помощью e-mail</p>
				<div className="form__series form__series-3">
					<ItemInput itemInputTitle='Ваше имя' name='registration_main_input_1' input='firstName' required/>
					<ItemInput itemInputTitle='Ваша фамилия' name='registration_main_input_2' input='secondName'
					           required/>
					<ItemInput itemInputTitle='E-mail' name='registration_main_input_3' input='email'
					           itemInputClass='input-item-1' required inputInvalid={main_error}/>
					{main_error &&
					<div className="input-item-1 input-item">
						<TitleWrapBlock title='Такой e-mail уже зарегистрирован'/>
					</div>
					}
				</div>
			</div>
			<div className="form__series-wrap form__series-wrap-8 form__series-wrap-1_adaptive">
				<div className="form__series form__series_row-gap-4 form__series-1_adaptive">
					<div className="flex">
						<Checkbox index={1} numb={20} name='registration_main_checkbox_1' checked required/>
						<p className="text-1 checkbox-text">Я согласен(на) с <a href="#" className='link link-1'>политикой
							конфиденциальности</a></p>
					</div>
					<div className="flex">
						<Checkbox index={2} numb={20} name='registration_main_checkbox_2' required/>
						<p className="text-1 checkbox-text">Даю согласие на обработку <a href="#"
						                                                                 className='link link-1'>персональных
							данных</a></p>
					</div>
				</div>
			</div>
			<div className="form__series form__series-8 form__series-1_adaptive">
				<div className="btn-2 btn btn_height-1" onClick={close}>
					<p className="text-7">Отмена</p>
				</div>
				<button className="btn-1 btn btn_height-1 order_-1_adaptive">
					<p className="text-7 text_white">Далее</p>
				</button>
			</div>
		</form>
	)
};

const mapStateToProps = () => ({
	initialValues: {
		registration_main_checkbox_1: true,
		registration_main_checkbox_2: true
	},
})

const MainReduxForm = connect(mapStateToProps)(reduxForm({form: 'registration_main'})(MainForm));
export default MainReduxForm;