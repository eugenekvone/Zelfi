import React from 'react';
import NavBlock from "../../Blocks/NavBlock/NavBlock";
import {Redirect, Route} from "react-router-dom";
import Activity from "./Activity/Activity";
import Paginator from "../../Commons/Paginator/Paginator";
import Inquiries from "./Inquiries/Inquiries";
import AccountManagement from "./AccountManagement/AccountManagement";
import InquiriesActivity from "./Inquiries/InquiriesActivity/InquiriesActivity";


const Moderation = ({url}) => {

	let nav = [
		{
			title: 'Мероприятия',
			url: 'activity'
		},
		{
			title: 'Запросы на перенос мероприятия без организатора',
			url: 'inquiries'
		},
		{
			title: 'Управление аккаунтами',
			url: 'account_management'
		},
	]

	return (
		<div>
			<Redirect to={url + nav[0].url}/>
			<NavBlock nav={nav} url={url} hocCase>
				<Route exact path={url + nav[0].url} render={() =>
					<Activity/>
				}/>
				<Route exact path={url + nav[1].url} render={() =>
					<Inquiries itemLink={url + nav[1].url + '/activity'}/>
				}/>
				<Route exact path={url + nav[1].url + '/activity'} render={() =>
					<InquiriesActivity url={url + nav[1].url}/>
				}/>
				<Route exact path={url + nav[2].url} render={() =>
					<AccountManagement/>
				}/>
			</NavBlock>
			<Paginator/>
		</div>
	)
};

export default Moderation;