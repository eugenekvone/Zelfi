import React from 'react';
import title__btn_icon from "../../assets/img/Profile/title__btn_icon.svg";
import TypeBlock from "../Blocks/TypeBlock/TypeBlock";
import {Redirect, Route} from "react-router-dom";
import Title from "../Commons/Title/Title";
import Bookmarks from "./Bookmarks/Bookmarks";
import Main from "./Main/Main";
import MyTickets from "./MyTickets/MyTickets";


const Profile = ({links}) => {

	const mainLink = links.mainLink + '/';
	const mainNav = links.mainNav;
	const nav = links.nav;

	let initialState = {
		relevant: [
			'Игра в баскетбол',
			'Игра в баскетбол',
			'Игра в баскетбол',
			'Игра в баскетбол',
			'Игра в баскетбол',
			'Игра в баскетбол',
			'Игра в баскетбол',
			'Игра в баскетбол',
			'Игра в баскетбол',
		],
		archive: [
			{
				title: 'Игра в баскетбол',
				visited: true,
			},
			{
				title: 'Игра в баскетбол',
				visited: false,
			}, {
				title: 'Игра в баскетбол',
				visited: false,
			},
			{
				title: 'Игра в баскетбол',
				visited: true,
			}, {
				title: 'Игра в баскетбол',
				visited: false,
			},
			{
				title: 'Игра в баскетбол',
				visited: false,
			}, {
				title: 'Игра в баскетбол',
				visited: false,
			},
		],
		activities: [
			'Игра в баскетбол',
			'Игра в баскетбол',
			'Игра в баскетбол',
			'Игра в баскетбол',
			'Игра в баскетбол',
			'Игра в баскетбол',
			'Игра в баскетбол',
			'Игра в баскетбол',
			'Игра в баскетбол',
		],
		organization: [
			'ООО «Праздник»',
			'ООО «Праздник»',
			'ООО «Праздник»',
			'ООО «Праздник»',
		],
	};

	return (
		<div className='content container'>
			<Redirect to={mainLink + mainNav[0].url}/>
			<Title title={'Профиль'}
			       btn_icon={title__btn_icon}
			       btn_title={'Управление мероприятиями'}
			       link={'/control'}
			       btn_1/>
			<TypeBlock items={mainNav} url={mainLink} secondType/>
			<Route path={mainLink + mainNav[0].url} render={() =>
				<Main/>
			}/>
			<Route path={mainLink + mainNav[1].url} render={() =>
				<MyTickets nav={nav.my_tickets}
				           url={mainLink + mainNav[1].url + '/'}
				           relevantItems={initialState.relevant}
				           archiveItems={initialState.archive}/>
			}/>
			<Route path={mainLink + mainNav[2].url} render={() =>
				<Bookmarks nav={nav.bookmarks}
				           url={mainLink + mainNav[2].url + '/'}
				           activitiesItems={initialState.activities}
				           organizationItems={initialState.organization}/>
			}/>
		</div>
	)
};

export default Profile;