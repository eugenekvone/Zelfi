import React from 'react';
import NavBlock from "../../Blocks/NavBlock/NavBlock";
import {Redirect, Route} from "react-router-dom";
import Activity from "./Activity/Activity";
import Paginator from "../../Commons/Paginator/Paginator";
import Donations from "./Donations/Donations";
import FinanceCompanies from "./FinanceCompanies/FinanceCompanies";

const Finance = ({url}) => {

	let nav = [
		{
			title: 'Финансы мероприятий',
			url: 'activity'
		},
		{
			title: 'Пожертвования',
			url: 'donations'
		},
		{
			title: 'Финансы организайций',
			url: 'finance_companies'
		},
	]

	return (
		<div>
			<Redirect to={url + nav[0].url}/>
			<NavBlock nav={nav} url={url} hocCase>
				<Route exact path={url + nav[0].url} render={() => <Activity/>}/>
				<Route exact path={url + nav[1].url} render={() => <Donations/>}/>
				<Route exact path={url + nav[2].url} render={() => <FinanceCompanies/>}/>
			</NavBlock>
			<Paginator/>
		</div>
	)
};

export default Finance;