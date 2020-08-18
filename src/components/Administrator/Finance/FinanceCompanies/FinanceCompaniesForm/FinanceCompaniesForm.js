import React from "react";
import {reduxForm} from "redux-form";
import Search from "../../../../Commons/Search/Search";
import ItemInput from "../../../../Commons/ItemInput/ItemInput";

const FinanceCompaniesForm = ({handleSubmit}) => {
	return (
		<form onSubmit={handleSubmit}>
			<div className="form__series-wrap form__series-wrap-1 form__series-wrap-3_adaptive">
				<Search placeholder='Поиск организации'/>
			</div>
			<div className="form__series-wrap form__series-wrap-5">
				<div className="form__series form__series-1">
					<ItemInput itemInputTitle='Город'
					           name='create_finance_companies_selector-1'
					           input='selector'/>
					<ItemInput itemInputTitle='Категория'
					           name='create_finance_companies_selector-2'
					           input='selector'/>
				</div>
			</div>
		</form>
	)
};

const FinanceCompaniesReduxForm = reduxForm({form: 'edit-finance_companies-events'})(FinanceCompaniesForm);
export default FinanceCompaniesReduxForm;