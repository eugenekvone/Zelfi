import React from "react";
import {reduxForm} from "redux-form";
import Search from "../../../../Commons/Search/Search";


const ArchiveForm = ({handleSubmit}) => {
	return (
		<form onSubmit={handleSubmit}>
			<Search title='Список билетов' placeholder='Поиск мероприятия'/>
		</form>
	)
};

const ArchiveReduxForm = reduxForm({form: 'edit-profile-my_tickets-archive'})(ArchiveForm);
export default ArchiveReduxForm;