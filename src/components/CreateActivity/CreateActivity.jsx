import React from 'react';
import Title from "../Commons/Title/Title";
import StepBlock from "../Blocks/StepBlock/StepBlock";
import {Redirect, Route, useHistory} from "react-router-dom";
import Step_4 from "./Step_4/Step_4";
import Requisites from "./Requisites/Requisites";
import Step_1_Container from "./Step_1/Step_1_Container";
import Step_2_Container from "./Step_2/Step_2_Container";
import Step_3_Container from "./Step_3/Step_3_Container";
import style from './CreateActivity.module.scss';


const CreateActivity = ({links}) => {

	const mainLink = links.mainLink + '/';
	const mainNav = links.mainNav;

	const history = useHistory();

	return (
		<div className='content container'>
			<Redirect to={mainLink + mainNav[0]}/>
			<div className={style.item}>
				<Title title={'Создать мероприятие'} btn_2 btn_title={'Отменить'} history={history}/>
			</div>
			<div className="case case_1">
				<Route exact path={mainLink + mainNav[0]} render={() =>
					<div>
						<StepBlock step={1}/>
						<Step_1_Container urlNext={mainLink + mainNav[1]}/>
					</div>
				}/>
				<Route exact path={mainLink + mainNav[1]} render={() =>
					<div>
						<StepBlock step={2}/>
						<Step_2_Container urlBack={mainLink + mainNav[0]} urlNext={mainLink + mainNav[2]}/>
					</div>
				}/>
				<Route path={mainLink + mainNav[2]} render={() =>
					<div>
						<StepBlock step={mainNav[2]}/>
						<Requisites url={mainLink + mainNav[2] + '/'}
						            urlBack={mainLink + mainNav[1]}
						            urlNext={mainLink + mainNav[3]}/>
					</div>
				}/>
				<Route exact path={mainLink + mainNav[3]} render={() =>
					<div>
						<StepBlock step={3}/>
						<Step_3_Container urlBack={mainLink + mainNav[2]} urlNext={mainLink + mainNav[4]}/>
					</div>
				}/>
				<Route exact path={mainLink + mainNav[4]} render={() =>
					<div>
						<StepBlock step={4}/>
						<Step_4/>
					</div>
				}/>
			</div>
		</div>
	)
};

export default CreateActivity;