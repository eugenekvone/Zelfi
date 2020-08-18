import React from 'react';
import TypeBlock from "../Blocks/TypeBlock/TypeBlock";
import {Redirect, Route} from "react-router-dom";
import Title from "../Commons/Title/Title";
import Statistics from "./Statistics/Statistics";
import Finance from "./Finance/Finance";
import Editing from "./Editing/Editing";
import Newsletter from "./Newsletter/Newsletter";
import Moderation from "./Moderation/Moderation";


const Administrator = ({links}) => {

	const mainLink = links.mainLink + '/';
	const mainNav = links.mainNav;

	return (
		<div className='content container'>
			<Redirect to={mainLink + mainNav[0].url}/>
			<Title title={'Администратор'}/>
			<TypeBlock items={mainNav} url={mainLink}/>
			<Route path={mainLink + mainNav[0].url} render={() => <Statistics/>}/>
			<Route path={mainLink + mainNav[1].url} render={() => <Finance url={mainLink + mainNav[1].url + '/'}/>}/>
			<Route path={mainLink + mainNav[2].url} render={() => <Moderation url={mainLink + mainNav[2].url + '/'}/>}/>
			<Route path={mainLink + mainNav[3].url} render={() => <Editing/>}/>
			<Route path={mainLink + mainNav[4].url} render={() => <Newsletter/>}/>
		</div>
	)
};

export default Administrator;