import React, {useEffect} from 'react';
import {reset} from "redux-form";
import {connect} from "react-redux";
import {
	addCreateActivityTicket,
	CreateActivityTicketDelete, setCreateActivityQuestion
} from "../../../redux/reducers/create_activity-reducer";
import Step_2 from "./Step_2";

const Step_2_Container = (props) => {

	let data_dates = []

	data_dates.push({
		title: 'Все даты',
		index: 0,
		numb: 2
	});

	for (let i = 0; i < props.data_dates.length; i++) {
		data_dates.push({
			title:
				props.data_dates[i].other.start.date
				+ ' c ' +
				props.data_dates[i].other.start.time
				+ ' по ' +
				props.data_dates[i].other.end.time,
			index: i + 1,
			numb: 2
		})
	}

	let date_now = [];

	if (props.form.hasOwnProperty('create_activity_step_2')) {
		let radio = props.form.create_activity_step_2_radio.values.create_activity_radio;
		if (radio == 0) {
			date_now = props.data_dates;
		} else {
			date_now.push(props.data_dates[radio - 1])
		}
	}

	return <Step_2 {...props} data_dates={data_dates} date_now={date_now}/>
}

let mapStateToProps = (state) => ({
	dates: state.create_activity.dates,
	form: state.form,
	data_dates: state.create_activity.data_dates,
});

let mapDispatchToProps = (dispatch) => {
	return {
		addTicket: (formData) => dispatch(addCreateActivityTicket(formData)),
		ticketDelete: (id, index) => dispatch(CreateActivityTicketDelete(id, index)),
		addQuestion: (formData) => dispatch(setCreateActivityQuestion(formData)),
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Step_2_Container);