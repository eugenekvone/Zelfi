import React from "react";
import {reduxForm} from "redux-form";
import Search from "../../../../Commons/Search/Search";


const ActivitiesForm = ({handleSubmit}) => {
	return (
		<form onSubmit={handleSubmit}>
			<Search placeholder='Поиск мероприятия' title='Список мероприятий'/>
		</form>
	)
};

const ActivitiesReduxForm = reduxForm({form: 'profile-bookmarks-activities'})(ActivitiesForm);
export default ActivitiesReduxForm;