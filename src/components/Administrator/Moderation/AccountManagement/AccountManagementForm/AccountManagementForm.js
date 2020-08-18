import React from "react";
import {reduxForm} from "redux-form";
import Search from "../../../../Commons/Search/Search";
import ItemInput from "../../../../Commons/ItemInput/ItemInput";

const AccountManagementForm = ({handleSubmit}) => {
	return (
		<form onSubmit={handleSubmit}>
			<div className="form__series-wrap form__series-wrap-1 form__series-wrap-3_adaptive">
				<Search placeholder='Поиск участника'/>
			</div>
			<div className="form__series-wrap form__series-wrap-7 form__series-wrap-2_adaptive">
				<div className="form__series form__series-1">
					<ItemInput itemInputTitle='Город'
					           name='create_admin_moderation-account_management_selector'
					           input='selector'/>
					<div className="btn_height-1 flex-ver-center flex-bottom none_adaptive">
						<p className="text-17 text_pink">Всего 12 378 пользователей</p>
					</div>
				</div>
			</div>
		</form>
	)
};

const AccountManagementReduxForm = reduxForm({form: 'edit-admin-moderation-account_management-events'})(AccountManagementForm);

export default AccountManagementReduxForm;