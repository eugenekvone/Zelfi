import React from "react";
import {reduxForm} from "redux-form";
import Search from "../../../../Commons/Search/Search";
import ItemInput from "../../../../Commons/ItemInput/ItemInput";

const DonationsForm = ({handleSubmit}) => {
	return (
		<form onSubmit={handleSubmit}>
			<div className="form__series-wrap form__series-wrap-1 form__series-wrap-3_adaptive">
				<Search placeholder='Поиск участника'/>
			</div>
			<div className="form__series-wrap form__series-wrap-5">
				<div className="form__series form__series-1">
					<ItemInput itemInputTitle='Период'
					           name='create_admin_finance_donations_selector-1'
					           input='selector'/>
					<ItemInput itemInputTitle='Город'
					           name='create_admin_finance_donations_selector-2'
					           input='selector'/>
				</div>
			</div>
		</form>
	)
};

const DonationsReduxForm = reduxForm({form: 'edit-admin-finance-donations-events'})(DonationsForm);
export default DonationsReduxForm;