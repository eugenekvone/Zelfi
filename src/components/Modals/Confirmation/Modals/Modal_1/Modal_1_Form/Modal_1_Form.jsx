import React from "react";
import {reduxForm} from "redux-form";
import ItemInput from "../../../../../Commons/ItemInput/ItemInput";


const Modal_1_Form = ({handleSubmit}) => {
	return (
		<form onSubmit={handleSubmit}>
			<div className="form__series-wrap form__series-wrap-3 form__series-wrap-5_adaptive">
				<p className="form__series-title form__series-title-1 text-3 text-5_adaptive form__series-title-1_adaptive">
					Запрос на присвоение мероприятия</p>
				<div className="form__series">
					<ItemInput name='inquiries_activity-modal-selector'
					           itemInputTitle='Организатор'
					           input='selector'/>
				</div>
			</div>
			<div className="form__series-wrap form__series-wrap-3 form__series-wrap-3_adaptive">
				<p className="form__series-title form__series-title-5 text-7 text_pink form__series-title-1_adaptive">
					Актуальные контактные данные для мероприятия</p>
				<div className="form__series">
					<ItemInput name='inquiries_activity-modal-input-1'
					           itemInputTitle='Телефон'
					           input='phone'/>
					<ItemInput name='inquiries_activity-modal-input-2'
					           itemInputTitle='E-mail'
					           input='email'/>
				</div>
			</div>
			<div className="form__series-wrap form__series-wrap-3 form__series-wrap-1_adaptive">
				<div className="form__series">
					<ItemInput name='inquiries_activity-modal-textarea'
					           itemInputTitle='Комментарий для администрации'
					           input='textarea'/>
				</div>
			</div>
		</form>
	)
};

const Modal_1_ReduxForm = reduxForm({form: 'edit-inquiries_activity-modal'})(Modal_1_Form);
export default Modal_1_ReduxForm;