import React from "react";
import {reduxForm} from "redux-form";
import ItemInput from "../../Commons/ItemInput/ItemInput";
import Checkbox from "../../Commons/Checkbox/Checkbox";
import TitleWrapBlock from "../../Blocks/TitleWrapBlock/TitleWrapBlock";
import {connect} from "react-redux";


const ContactsForm = ({handleSubmit, success, reset, submitSucceeded, setCallback, submitFailed}) => {

	if (submitSucceeded) reset(true);
	if (submitFailed && success) setCallback(false)

	return (
		<form onSubmit={handleSubmit}>
			<p className="form__series-title form__series-title-4 text-3 text-5_adaptive form__series-title-1_adaptive">
				Напишите нам</p>
			<div className="form__series">
				<ItemInput itemInputTitle='Ф.И.О.'
				           input='fullName'
				           required
				           name='name'/>
				<ItemInput itemInputTitle='E-mail'
				           input='email'
				           required
				           name='email'/>
				<ItemInput itemInputTitle='Сообщение'
				           name='text'
				           required
				           input='textarea'/>
				<div className="flex-ver-center">
					<div className="flex">
						<Checkbox name='consent' index={1} numb={11} required/>
						<p className="text-1 checkbox-text">
							Я согласен на обработку <a href="#" className='link link-1'>персональных данных</a>
						</p>
					</div>
				</div>
				{success && <TitleWrapBlock title='Сообщение отправлено' success/>}
				<button className="btn btn-1 btn_height-1">
					<p className="text-7 text_white">Отправить</p>
				</button>
			</div>
		</form>
	)
};

const mapStateToProps = () => ({
	initialValues: {consent: true},
})

const ContactsReduxForm = connect(mapStateToProps)(reduxForm({form: 'contacts'})(ContactsForm));
export default ContactsReduxForm;