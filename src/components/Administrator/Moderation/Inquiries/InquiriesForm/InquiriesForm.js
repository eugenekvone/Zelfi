import React from "react";
import {reduxForm} from "redux-form";
import Search from "../../../../Commons/Search/Search";
import ItemInput from "../../../../Commons/ItemInput/ItemInput";

const InquiriesForm = ({handleSubmit}) => {
	return (
		<form onSubmit={handleSubmit}>
			<div className="form__series-wrap form__series-wrap-1 form__series-wrap-3_adaptive">
				<Search placeholder='Поиск мероприятия'/>
			</div>
			<div className="form__series-wrap form__series-wrap-6 form__series-wrap-2_adaptive">
				<div className="form__series form__series-1">
					<ItemInput itemInputTitle='Дата'
					           name='create_admin_moderation_inquiries_date'
					           input='date'/>
					<ItemInput itemInputTitle='Категория'
					           name='create_admin_moderation_inquiries_selector-1'
					           input='selector'/>
					<ItemInput itemInputTitle='Категория'
					           name='create_admin_moderation_inquiries_selector-2'
					           input='selector'/>
				</div>
			</div>
		</form>
	)
};

const InquiriesReduxForm = reduxForm({form: 'edit-admin-moderation-inquiries-events'})(InquiriesForm);
export default InquiriesReduxForm;