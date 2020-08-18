import React from 'react';
import MainReduxForm from "./MainForm/MainForm";
import {useHistory} from "react-router-dom";
import {SubmitNext} from "../../../utils/SubmitNext";

const Main = ({urlBack, urlNext, onSubmit, citys}) => {

	const history = useHistory();
	let onSubmitFunc = SubmitNext(onSubmit, history, urlNext);

	return <MainReduxForm urlBack={urlBack} urlNext={urlNext} onSubmit={onSubmitFunc} citys={citys}/>
}
export default Main