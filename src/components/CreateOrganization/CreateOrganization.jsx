import React from 'react';
import Title from "../Commons/Title/Title";
import {Route, useHistory} from "react-router-dom";
import Main from "./Main/Main";
import InfoContainer from "./Info/InfoContainer";
import Success from "./Success/Success";


const CreateOrganization = ({links, onSubmit, citys}) => {

	const mainLink = links.mainLink + '/';
	const mainNav = links.mainNav;

	const history = useHistory();

	return (
		<div className='container content'>
			<Title title={'Создать организацию'} btn_2 btn_title={'Отменить'} history={history}/>
			<div className="case">
				<Route exact path={mainLink} render={() =>
					<Main urlNext={mainLink + mainNav[0]} urlBack={'/create_event'} onSubmit={onSubmit} citys={citys}/>
				}/>
				<Route exact path={mainLink + mainNav[0]} render={() =>
					<InfoContainer urlBack={mainLink + mainNav[0]} url={mainLink} urlNext={mainLink + mainNav[1]}/>
				}/>
				<Route exact path={mainLink + mainNav[1]} render={() =>
					<Success/>
				}/>
			</div>
		</div>
	)
};

export default CreateOrganization;