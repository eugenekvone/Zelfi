import React, {useEffect} from 'react';
import {connect} from "react-redux";
import Activity from "./Activity";
import {getOneActivity} from "../../redux/reducers/activitys-reducer";


const ActivityContainer = (props) => {

	useEffect(() => {
		props.getOneActivity();
	}, []);

	return (
		<Activity {...props}/>
	)
}

let mapStateToProps = () => ({});

let mapDispatchToProps = (dispatch) => ({
	getOneActivity: () => dispatch(getOneActivity()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ActivityContainer);