import React from "react";
import {reduxForm} from "redux-form";
import ItemInput from "../../../../../Commons/ItemInput/ItemInput";


const ModalForm = ({handleSubmit}) => {
	return (
		<form onSubmit={handleSubmit}>
			<div className="form__series-wrap form__series-wrap-2 form__series-wrap-2_adaptive">
				<p className="form__series-title form__series-title-1
                text-3 form__series-title-1_adaptive text-5_adaptive">
					Отклонено мероприятие “Чайная церемония”</p>
				<div className="form__series">
					<ItemInput name='admin-moderation-activity-modal-input'
					           itemInputTitle='Причина'/>
					<ItemInput name='admin-moderation-activity-modal-textarea'
					           itemInputTitle='Комментарий'
					           input='textarea'/>
				</div>
			</div>
		</form>
	)
};

const ModalReduxForm = reduxForm({form: 'edit-admin-moderation-activity-modal-event'})(ModalForm);
export default ModalReduxForm;