import React from "react";
import {reduxForm} from "redux-form";
import ItemInput from "../../../Commons/ItemInput/ItemInput";

const EditingForm = ({handleSubmit}) => {
	return (
		<form onSubmit={handleSubmit}>
			<div className="form__series-wrap">
				<div className="form__series form__series-9 form__series-1_adaptive">
					<ItemInput itemInputTitle='Ограничения на покупку билетов'
					           itemInputClass='order_-3_adaptive'
					           name='create_admin-editing_input'
					           type='number'
					           placeholder='150'/>
					<div className="btn btn-2 btn_height-1 flex-bottom order_-1_adaptive">
						<p className="text-7">Отменить</p>
					</div>
					<div className="btn btn-1 btn_height-1 flex-bottom order_-2_adaptive">
						<p className="text-7 text_white">Сохранить</p>
					</div>
				</div>
			</div>
		</form>
	)
};

const EditingReduxForm = reduxForm({form: 'edit-admin-editing-events'})(EditingForm);
export default EditingReduxForm;