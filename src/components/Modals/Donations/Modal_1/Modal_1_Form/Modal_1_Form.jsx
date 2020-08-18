import React from "react";
import {reduxForm} from "redux-form";
import ItemInput from "../../../../Commons/ItemInput/ItemInput";


const Modal_1_Form = ({handleSubmit}) => {
	return (
		<form onSubmit={handleSubmit}>
			<div className="form__series-wrap form__series-wrap-2 form__series-wrap-2_adaptive">
				<div className="form__series">
					<ItemInput name='donations-modal-input'
					           itemInputTitle='Сумма'
					           itemInputTitleSpan='(Минимальная сумма 10 ₽)'
					           type='number'/>
				</div>
			</div>
		</form>
	)
};

const Modal_1_ReduxForm = reduxForm({form: 'edit-donations-modal'})(Modal_1_Form);
export default Modal_1_ReduxForm;