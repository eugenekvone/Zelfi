import React from "react";
import {reduxForm} from "redux-form";
import Search from "../../Commons/Search/Search";
import ItemInput from "../../Commons/ItemInput/ItemInput";


const OrganizationForm = ({handleSubmit}) => {
	return (
		<form onSubmit={handleSubmit}>
			<div className="form__series-wrap form__series-wrap-2 form__series-wrap-3_adaptive">
				<Search placeholder={'Поиск мероприятий'} title={'Мероприятия организации'}/>
			</div>
			<div className="form__series-wrap form__series-wrap-2 form__series-wrap-3_adaptive">
				<div className="form__series form__series-1">
					<ItemInput itemInputTitle={'Период'}
					           name={'create_organization_input-1'}
					           input={'date'}/>
					<ItemInput itemInputTitle={'Город'}
					           name={'create_organization_input-2'}
					           input={'selector'}/>
					<ItemInput itemInputTitle={'Категория'}
					           name={'create_organization_input-3'}
					           input={'selector'}/>
				</div>
			</div>
		</form>
	)
};

const OrganizationReduxForm = reduxForm({form: 'edit-organization'})(OrganizationForm);
export default OrganizationReduxForm;