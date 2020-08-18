import React from 'react';
import Title from "../Commons/Title/Title";
import {Route, useHistory} from "react-router-dom";
import Main from "./Main/Main";
import Finish from "./Finish/Finish";


const Buy = () => {

	const history = useHistory();

	return (
		<div className='content container'>
			<Title title={'Чайная церемония'}
			       btn_title={'Отменить'}
			       history={history}
			       btn_2/>
			<div className="case case-1">
				<Route exact path='/buy' render={() => <Main/>}/>
				<Route exact path='/buy/finish' render={() => <Finish/>}/>
			</div>
		</div>
	)
};

export default Buy;