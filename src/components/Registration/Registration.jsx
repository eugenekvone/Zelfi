import React from 'react';
import Title from "../Commons/Title/Title";
import {Route} from "react-router-dom";
import Success from "./Success/Success";
import PasswordContainer from "./Password/PasswordContainer";
import SendContainer from "./Send/SendContainer";

const Registration = ({links}) => {

	const main = links.mainLink;
	const nav = links.nav;

	return (
		<div className='content container'>
			<Title title={'Регистрация'}/>
			<div className="case">
				<Route path={main + nav[0]} render={() => <SendContainer linkNext={main + nav[1]}/>}/>
				<Route exact path={main + nav[1]} render={() => <PasswordContainer linkNext={main + nav[2]}/>}/>
				<Route exact path={main + nav[2]} render={() => <Success/>}/>
			</div>
		</div>
	)
};

export default Registration;