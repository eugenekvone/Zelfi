import React from "react";
import {reduxForm} from "redux-form";
import Search from "../../Commons/Search/Search";

const MembersForm = ({handleSubmit}) => {
	return (
		<form onSubmit={handleSubmit}>
			<Search placeholder='Поиск участников'/>
		</form>
	)
};

const MembersReduxForm = reduxForm({form: 'edit-members'})(MembersForm);
export default MembersReduxForm;