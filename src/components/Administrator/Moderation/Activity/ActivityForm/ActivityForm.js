import React from "react";
import {reduxForm} from "redux-form";
import Search from "../../../../Commons/Search/Search";
import ItemInput from "../../../../Commons/ItemInput/ItemInput";

const ActivityForm = ({handleSubmit}) => {
	return (
		<form onSubmit={handleSubmit}>
			<div className="form__series-wrap form__series-wrap-1 form__series-wrap-3_adaptive">
				<Search placeholder='Поиск мероприятия'/>
			</div>
			<div className="form__series-wrap form__series-wrap-2 form__series-wrap-2_adaptive">
				<div className="form__series form__series-1">
					<ItemInput itemInputTitle='Город'
					           name='create_admin_moderation_activity_selector-1'
					           input='selector'/>
					<ItemInput itemInputTitle='Категория'
					           name='create_admin_moderation_activity_selector-2'
					           input='selector'/>
				</div>
			</div>
		</form>
	)
};

const ActivityReduxForm = reduxForm({form: 'edit-admin-activity-events'})(ActivityForm);

export default ActivityReduxForm;