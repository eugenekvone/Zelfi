import React from 'react';
import cn from "classnames";
import {Redirect, Route} from "react-router-dom";
import Organization from "./Organization/Organization";
import NavBlock from "../../Blocks/NavBlock/NavBlock";
import Activities from "./Activities/Activities";


const Bookmarks = ({nav, url, activitiesItems, organizationItems}) => {
	return (
		<div>
			<Redirect to={url + nav[0].url}/>
			<NavBlock nav={nav} url={url} hocCase typeSecond>
				<Route exact path={url + nav[0].url} render={() => <Activities items={activitiesItems}/>}/>
				<Route exact path={url + nav[1].url} render={() => <Organization items={organizationItems}/>}/>
			</NavBlock>
		</div>
	)
};

export default Bookmarks;