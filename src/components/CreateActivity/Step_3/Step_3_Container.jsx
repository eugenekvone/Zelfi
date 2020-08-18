import React from 'react';
import {connect} from "react-redux";
import Step_3 from "./Step_3";
import {CreateActivitySubmit} from "../../../redux/reducers/create_activity-reducer";

const Step_3_Container = (props) => {

	const dates = []

	for (let i = 0; i < props.data_dates.length; i++) {
		dates.push(props.data_dates[i].other.start.date)
	}

	const gallery = props.other_img;

	if (props.activity.video) {
		gallery.push([props.activity.video]);
	}

	return <Step_3 {...props} dates={dates} gallery={gallery}/>
}

let mapStateToProps = (state) => ({
	activity: state.create_activity.data,
	other_img: state.blocks.block_14.other_img,
	main_img: state.blocks.block_14.main_img,
	data_dates: state.create_activity.data_dates,
});

let mapDispatchToProps = (dispatch) => {
	return {
		onSubmit: () => dispatch(CreateActivitySubmit()),
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Step_3_Container);