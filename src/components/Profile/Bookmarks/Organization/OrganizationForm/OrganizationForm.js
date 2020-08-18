import React from "react";
import {reduxForm} from "redux-form";
import Search from "../../../../Commons/Search/Search";


const OrganizationForm = ({handleSubmit}) => {
	return (
		<form onSubmit={handleSubmit}>
			<Search placeholder={'Поиск компаний'} title={'Список компаний'}/>
		</form>
	)
};

const OrganizationReduxForm = reduxForm({form: 'edit-profile-bookmarks-organiz'})(OrganizationForm);
export default OrganizationReduxForm;