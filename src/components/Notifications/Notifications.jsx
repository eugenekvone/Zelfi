import React from 'react';
import NavBlock from "../Blocks/NavBlock/NavBlock";
import {Redirect, Route} from "react-router-dom";
import Title from "../Commons/Title/Title";
import All from "./All/All";
import Points from "./Points/Points";

const Notifications = ({links}) => {

	const mainLink = links.mainLink + '/';
	const nav = links.nav;

	let initialState = {
		all: [
			'Очень хорошая церемония, чай вкусный!',
			'Очень хорошая церемония, чай вкусный!',
			'Очень хорошая церемония, чай вкусный!',
		],
		points: [
			'Начислены балы за участие в мероприятии “ Чайная церемония”.',
			'Начислены балы за участие в мероприятии “ Чайная церемония”.',
			'Начислены балы за участие в мероприятии “ Чайная церемония”.',
		],
	};

	return (
		<div className='content container'>
			<Redirect to={mainLink + nav[0].url}/>
			<Title title={'Уведомления'}/>
			<NavBlock nav={nav} url={mainLink} hocCase typeSecond>
				<Route exact path={mainLink + nav[0].url} render={() =>
					<All items={initialState.all}/>
				}/>
				<Route exact path={mainLink + nav[1].url} render={() =>
					<Points items={initialState.points}/>
				}/>
			</NavBlock>
		</div>
	)
};

export default Notifications;