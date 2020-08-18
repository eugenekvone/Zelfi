import React from 'react';
import {Redirect} from "react-router-dom";
import Block_23_Container from "../../Blocks/HelpBlock/HelpBlock_Container";
import {addCreateActivityRequisite} from "../../../redux/reducers/create_activity-reducer";
import {connect} from "react-redux";

const Requisites = ({url, urlBack, urlNext, onSubmit}) => {

	let nav = [
		{
			title: 'Для юридических лиц',
			url: 'legal'
		},
		{
			title: 'Для физических лиц',
			url: 'individ'
		},
	];

	return (
		<div>
			<Redirect to={url + nav[0].url}/>
			<Block_23_Container url={url}
			                    urlBack={urlBack}
			                    urlNext={urlNext}
			                    nav={nav}
			                    onSubmit={onSubmit}
			                    message
			                    type={'create_event'}/>
		</div>
	)
}

let mapStateToProps = () => ({});

let mapDispatchToProps = (dispatch) => {
	return {
		onSubmit: (formData) => dispatch(addCreateActivityRequisite(formData)),
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Requisites);