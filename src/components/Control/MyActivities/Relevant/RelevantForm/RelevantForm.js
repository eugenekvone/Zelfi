import React from "react";
import {reduxForm} from "redux-form";
import Search from "../../../../Commons/Search/Search";


const RelevantForm = ({handleSubmit}) => {
	return (
		<form onSubmit={handleSubmit}>
			<Search placeholder={'Поиск мероприятий'}/>
		</form>
	)
};

const RelevantReduxForm = reduxForm({form: 'edit-control-my_activities-relevant'})(RelevantForm);
export default RelevantReduxForm;