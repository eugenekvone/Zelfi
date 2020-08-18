import React from "react";
import {reduxForm} from "redux-form";
import Search from "../../../../Commons/Search/Search";
import style from "./OrganizationForm.module.scss";
import ItemInput from "../../../../Commons/ItemInput/ItemInput";

const OrganizationForm = ({handleSubmit}) => {
	return (
		<form onSubmit={handleSubmit}>
			<div className={style.block}>
				<Search placeholder={'Поиск мероприятий'}/>
			</div>
			<div className="form__series-wrap form__series-wrap-5">
				<div className="form__series form__series-1">
					<ItemInput itemInputTitle={'Город'}
					           name={'create_control-organization_selector-1'}
					           input={'selector'}
					/>
					<ItemInput itemInputTitle={'Категория'}
					           name={'create_control-organization_selector-2'}
					           input={'selector'}
					/>
				</div>
			</div>
		</form>
	)
};

const OrganizationReduxForm = reduxForm({form: 'edit-control-my_organizations-organization'})(OrganizationForm);
export default OrganizationReduxForm;