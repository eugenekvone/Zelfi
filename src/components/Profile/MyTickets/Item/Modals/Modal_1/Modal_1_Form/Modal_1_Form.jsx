import React from "react";
import {reduxForm} from "redux-form";
import ItemInput from "../../../../../../Commons/ItemInput/ItemInput";


const Modal_1_Form = ({handleSubmit}) => {
	return (
		<form onSubmit={handleSubmit}>
			<div className="form__series-wrap form__series-wrap-2 form__series-wrap-2_adaptive">
				<p className="form__series-title form__series-title-1 text-3 text-5_adaptive">Контактная информация</p>
				<div className="form__series form__series-3 form__series_row-gap-3 form__series-2_adaptive">
					<ItemInput name={'profile-my_tickets-item-modal-1-input-1'}
					           itemInputTitle={'Имя'}
					           wrapClass={'input-wrap_purple'}
					           input={'firstName'}/>
					<ItemInput name={'profile-my_tickets-item-modal-1-input-2'}
					           itemInputTitle={'Фамилия'}
					           wrapClass={'input-wrap_purple'}
					           input={'secondName'}/>
					<ItemInput name={'profile-my_tickets-item-modal-1-input-3'}
					           itemInputTitle={'Телефон'}
					           input={'phone'}
					           wrapClass={'input-wrap_purple'}
					           itemInputClass={'input-item-1'}/>
					<ItemInput name={'profile-my_tickets-item-modal-1-input-4'}
					           itemInputTitle={'E-mail'}
					           input={'email'}
					           wrapClass={'input-wrap_purple'}
					           itemInputClass={'input-item-1'}/>
					<ItemInput name={'profile-my_tickets-item-modal-1-input-5'}
					           input='textarea'
					           itemInputTitle={'Причина отмены'}
					           itemInputClass={'input-item-1'}/>
				</div>
			</div>
		</form>
	)
};

const Modal_1_ReduxForm = reduxForm({form: 'edit-profile-my_tickets-item-modal-1'})(Modal_1_Form);
export default Modal_1_ReduxForm;