import React from "react";
import {reduxForm} from "redux-form";
import Search from "../../../../Commons/Search/Search";


const PastForm = ({handleSubmit}) => {
	return (
		<form onSubmit={handleSubmit}>
			<Search placeholder={'Поиск мероприятий'}/>
		</form>
	)
};

const PastReduxForm = reduxForm({form: 'edit-control-my_activities-past'})(PastForm);
export default PastReduxForm;