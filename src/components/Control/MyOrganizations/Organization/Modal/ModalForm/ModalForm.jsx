import React from "react";
import {reduxForm} from "redux-form";
import ItemInput from "../../../../../Commons/ItemInput/ItemInput";


const ModalForm = ({handleSubmit}) => {
	return (
		<form onSubmit={handleSubmit}>
			<div className="form__series-wrap form__series-wrap-2 form__series-wrap-2_adaptive">
				<div className="form__series">
					<ItemInput name='my_organization-organization-modal-input' itemInputTitle='E-mail' input='email'/>
				</div>
			</div>
		</form>
	)
};

const ModalReduxForm = reduxForm({form: 'edit-my_organization-organization-modal'})(ModalForm);
export default ModalReduxForm;