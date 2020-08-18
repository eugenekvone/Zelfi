import React from 'react';
import NavBlock from "../../Blocks/NavBlock/NavBlock";
import {Redirect, Route} from "react-router-dom";
import Paginator from "../../Commons/Paginator/Paginator";
import Relevant from "./Relevant/Relevant";
import Archive from "./Archive/Archive";


const MyTickets = ({nav, url, relevantItems, archiveItems}) => {
	return (
		<div>
			<Redirect to={url + nav[0].url}/>
			<NavBlock nav={nav} url={url} hocCase typeSecond>
				<Route exact path={url + nav[0].url} render={() => <Relevant items={relevantItems}/>}/>
				<Route exact path={url + nav[1].url} render={() => <Archive items={archiveItems}/>}/>
			</NavBlock>
			<Paginator/>
		</div>
	)
};

export default MyTickets;