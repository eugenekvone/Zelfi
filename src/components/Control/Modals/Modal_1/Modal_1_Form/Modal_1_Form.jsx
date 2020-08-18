import React from "react";
import {reduxForm} from "redux-form";
import ItemInput from "../../../../Commons/ItemInput/ItemInput";


const Modal_1_Form = ({handleSubmit}) => {
	return (
		<form onSubmit={handleSubmit}>
			<ItemInput name='control-output_means-modal-input'
			           itemInputTitle='Сумма'
			           itemInputTitleClass='text-5_adaptive'
			           placeholder='10 000'
			           type='number'
			           wrapClass='input-wrap_purple'/>
		</form>
	)
};

const Modal_1_ReduxForm = reduxForm({form: 'edit-control-output_means-modal-event'})(Modal_1_Form);
export default Modal_1_ReduxForm;