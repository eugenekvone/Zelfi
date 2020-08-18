import React from "react";
import {reduxForm} from "redux-form";
import ItemInput from "../../../../../Commons/ItemInput/ItemInput";


const ModalForm = ({handleSubmit}) => {
	return (
		<form onSubmit={handleSubmit}>
			<div className="form__series-wrap form__series-wrap-2 form__series-wrap-2_adaptive">
				<p className="form__series-title form__series-title-1 text-3
                text-5_adaptive form__series-title-3_adaptive">Возврат средств</p>
				<div className="form__series">
					<ItemInput name='admin-finance-activity-modal-input-1'
					           type='number'
					           itemInputTitle='Сумма'
					           input='ruble'/>
					<ItemInput name='admin-finance-activity-modal-input-2'
					           type='number'
					           itemInputTitle='Номер билета'/>
				</div>
			</div>
		</form>
	)
};

const ModalReduxForm = reduxForm({form: 'edit-admin-finance-activity-modal-event'})(ModalForm);
export default ModalReduxForm;