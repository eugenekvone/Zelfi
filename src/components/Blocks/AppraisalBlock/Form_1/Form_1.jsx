import React from "react";
import {reduxForm} from "redux-form";
import cn from "classnames";
import ItemInput from "../../../Commons/ItemInput/ItemInput";


const Form_1 = ({handleSubmit}) => {
	return (
		<form onSubmit={handleSubmit}>
			<div className="form__series-wrap">
				<div className="form__series form__series-2">
					<ItemInput
						name='block_7__textarea'
						itemInputTitle='Текст отзыва'
						input='textarea'
						itemInputClass='input-item-2'
					/>
					<div className="btn btn-1 btn_height-1">
						<p className="text-7 text_white">Отправить</p>
					</div>
				</div>
			</div>
		</form>
	)
};

const Form_1_ReduxForm = reduxForm({form: 'edit-block_7__form_1'})(Form_1);
export default Form_1_ReduxForm;