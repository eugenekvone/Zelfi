import React from 'react';
import MainReduxForm from "./MainForm/MainForm";
import SocialBlock from "../../Blocks/SocialBlock/SocialBlock";
import {useHistory} from "react-router-dom";


const Main = (props) => {

	const history = useHistory();
	if (props.success) {
		props.close();
		history.push(props.linkNext);
	}

	return (
		<div>
			<SocialBlock/>
			<MainReduxForm onSubmit={props.onSubmit} main_error={props.main_error} close={props.close}/>
		</div>
	)
};

export default Main;