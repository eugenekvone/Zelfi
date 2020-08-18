import React from "react";
import {reduxForm} from "redux-form";
import Search from "../../../../Commons/Search/Search";


const ModernizationForm = ({handleSubmit}) => {
	return (
		<form onSubmit={handleSubmit}>
			<Search placeholder={'Поиск мероприятий'}/>
		</form>
	)
};

const ModernizationReduxForm = reduxForm({form: 'edit-control-my_activities-relevant'})(ModernizationForm);
export default ModernizationReduxForm;