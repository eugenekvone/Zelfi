import React from 'react';
import {Redirect, Route} from "react-router-dom";
import title__btn_icon from "../../assets/img/Control/title__btn_icon.svg";
import TypeBlock from "../Blocks/TypeBlock/TypeBlock";
import Title from "../Commons/Title/Title";
import Organization from "./MyOrganizations/Organization/Organization";
import Activity from "./MyActivities/Relevant/Activity/Activity";
import OutputMeans from "./OutputMeans/OutputMeans";
import MyActivities from "./MyActivities/MyActivities";
import MyOrganizations from "./MyOrganizations/MyOrganizations";
import Block_23_Container from "../Blocks/HelpBlock/HelpBlock_Container";


const Control = ({links}) => {

	const mainLink = links.mainLink + '/';
	const mainNav = links.mainNav;
	const nav = links.nav;

	let initialState = {
		my_activities: {
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
			past: [
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
			modernization: [
				{
					title: 'Игра в баскетбол',
					error: false
				},
				{
					title: 'Игра в баскетбол',
					error: false
				},
				{
					title: 'Игра в баскетбол',
					error: false
				},
				{
					title: 'Игра в баскетбол',
					error: true
				},
				{
					title: 'Игра в баскетбол',
					error: true
				}
			]
		},
		my_organozations: [
			{
				title: 'ООО «Праздник»',
				contract: true,
				type: 1,
				items_2: [
					{
						title: 'Общая сумма проданных билетов с учетом комиссии Zelfi:',
						text: '254 321',
						pink: true
					},
					{
						title: 'Общая сумма поддержки организатора с учетом комиссии Zelfi:',
						text: '57 054',
						pink: true
					},
				]
			},
			{
				title: 'ООО «Праздник»',
				contract: false,
				type: 1,
				items_2: [
					{
						title: 'Общая сумма проданных билетов с учетом комиссии Zelfi:',
						text: '254 321',
						pink: true
					},
					{
						title: 'Общая сумма поддержки организатора с учетом комиссии Zelfi:',
						text: '57 054',
						pink: true
					},
				]
			},
			{
				title: 'ООО «Праздник»',
				contract: false,
				type: 1,
				items_2: [
					{
						title: 'Общая сумма проданных билетов с учетом комиссии Zelfi:',
						text: '254 321',
						pink: true
					},
					{
						title: 'Общая сумма поддержки организатора с учетом комиссии Zelfi:',
						text: '57 054',
						pink: true
					},
				]
			},
			{
				title: 'ООО «Праздник»',
				contract: true,
				type: 1,
				items_2: [
					{
						title: 'Общая сумма проданных билетов с учетом комиссии Zelfi:',
						text: '254 321',
						pink: true
					},
					{
						title: 'Общая сумма поддержки организатора с учетом комиссии Zelfi:',
						text: '57 054',
						pink: true
					},
				]
			},
			{
				title: 'ООО «Праздник»',
				contract: true,
				type: 1,
				items_2: [
					{
						title: 'Общая сумма проданных билетов с учетом комиссии Zelfi:',
						text: '254 321',
						pink: true
					},
					{
						title: 'Общая сумма поддержки организатора с учетом комиссии Zelfi:',
						text: '57 054',
						pink: true
					},
				]
			},
		],
		output_means: [
			{
				title: 'ООО «Праздник»',
				contract: true,
				type: 2,
				items_1: [
					{
						title: 'Актуальных мероприятий:',
						text: '23',
						pink: false
					},
					{
						title: 'Прошедших меропритяий:',
						text: '112',
						pink: false
					}
				],
				items_2: [
					{
						title: 'Общая сумма проданных билетов:',
						text: '254 321',
						pink: false
					},
					{
						title: 'Общая сумма донейшена:',
						text: '57 054',
						pink: false
					},
					{
						title: 'Доступно для вывода:',
						text: '311 325',
						pink: true
					},
				]
			},
			{
				title: 'ООО «Праздник»',
				contract: false,
				type: 2,
				items_1: [
					{
						title: 'Актуальных мероприятий:',
						text: '23',
						pink: false
					},
					{
						title: 'Прошедших меропритяий:',
						text: '112',
						pink: false
					}
				],
				items_2: [
					{
						title: 'Общая сумма проданных билетов:',
						text: '254 321',
						pink: false
					},
					{
						title: 'Общая сумма донейшена:',
						text: '57 054',
						pink: false
					},
					{
						title: 'Доступно для вывода:',
						text: '311 325',
						pink: true
					},
				]
			},
			{
				title: 'ООО «Праздник»',
				contract: false,
				type: 2,
				items_1: [
					{
						title: 'Актуальных мероприятий:',
						text: '23',
						pink: false
					},
					{
						title: 'Прошедших меропритяий:',
						text: '112',
						pink: false
					}
				],
				items_2: [
					{
						title: 'Общая сумма проданных билетов:',
						text: '254 321',
						pink: false
					},
					{
						title: 'Общая сумма донейшена:',
						text: '57 054',
						pink: false
					},
					{
						title: 'Доступно для вывода:',
						text: '311 325',
						pink: true
					},
				]
			},
			{
				title: 'ООО «Праздник»',
				contract: true,
				type: 2,
				items_1: [
					{
						title: 'Актуальных мероприятий:',
						text: '23',
						pink: false
					},
					{
						title: 'Прошедших меропритяий:',
						text: '112',
						pink: false
					}
				],
				items_2: [
					{
						title: 'Общая сумма проданных билетов:',
						text: '254 321',
						pink: false
					},
					{
						title: 'Общая сумма донейшена:',
						text: '57 054',
						pink: false
					},
					{
						title: 'Доступно для вывода:',
						text: '311 325',
						pink: true
					},
				]
			},
			{
				title: 'ООО «Праздник»',
				contract: true,
				type: 2,
				items_1: [
					{
						title: 'Актуальных мероприятий:',
						text: '23',
						pink: false
					},
					{
						title: 'Прошедших меропритяий:',
						text: '112',
						pink: false
					}
				],
				items_2: [
					{
						title: 'Общая сумма проданных билетов:',
						text: '254 321',
						pink: false
					},
					{
						title: 'Общая сумма донейшена:',
						text: '57 054',
						pink: false
					},
					{
						title: 'Доступно для вывода:',
						text: '311 325',
						pink: true
					},
				]
			},
		],
	};

	return (
		<div className='content container'>
			<Redirect to={mainLink + mainNav[0].url}/>
			<Title title={'Управление мероприятиями'}
			       btn_1
			       btn_icon={title__btn_icon}
			       btn_title={'Профиль'}
			       link={'/profile'}/>
			<TypeBlock items={mainNav} url={mainLink}/>
			<Route path={mainLink + mainNav[0].url} render={() =>
				<MyActivities mainLink={mainLink}
				              nav={nav.link_1}
				              url={mainLink + mainNav[0].url + '/'}
				              relevantItems={initialState.my_activities.relevant}
				              pastItems={initialState.my_activities.past}
				              modernizationItems={initialState.my_activities.modernization}/>
			}/>
			<Route exact path={mainLink + mainNav[1].url} render={() =>
				<MyOrganizations items={initialState.my_organozations}
				                 url={mainLink + mainNav[1].url}/>
			}/>
			<Route path={mainLink + mainNav[1].url + '/organization'} render={() =>
				<Organization url={mainLink + mainNav[1].url + '/organization'} urlBack={mainLink + mainNav[1].url}/>
			}/>
			<Route exact path={mainLink + mainNav[2].url} render={() =>
				<OutputMeans items={initialState.output_means}
				             url_1={mainLink + mainNav[1].url + '/organization'}
				             url_2={mainLink + mainNav[2].url + '/request/' + nav.link_2[0].url}/>
			}/>
			<Route path={mainLink + mainNav[2].url + '/request'} render={() =>
				<Block_23_Container nav={nav.link_2}
				                    url={mainLink + mainNav[2].url + '/request/'}
				                    urlBack={mainLink + mainNav[2].url}
				                    urlNext={'#'} message type={'output_means'}/>
			}/>
			<Route path={mainLink + 'activity'} render={() =>
				<Activity url={mainLink + mainNav[0].url + '/' + nav.link_1[0].url + '/'}/>
			}/>
		</div>
	)
};

export default Control;