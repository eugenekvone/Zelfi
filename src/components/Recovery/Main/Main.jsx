import React from 'react';
import MainReduxForm from "./MainForm'/MainForm";
import {useHistory} from "react-router-dom";


const Main = (props) => {

	const history = useHistory();

	if (props.success) history.push(props.linkNext);

	return <MainReduxForm onSubmit={props.onSubmit} history={history} main_error={props.error}/>
};

export default Main;