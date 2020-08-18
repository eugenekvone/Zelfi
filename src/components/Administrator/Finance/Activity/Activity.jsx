import React, {useState} from 'react';
import style from './Activity.module.scss';
import cn from "classnames";
import ActivityReduxForm from "./ActivityForm/ActivityForm";
import BtnSorting from "../../../Commons/Btns/BtnSorting/BtnSorting";
import InfoWrapBlock from "../../../Blocks/InfoWrapBlock/InfoWrapBlock";
import Item from "./Item/Item";
import Modal from "./Modal/Modal";
import {NumbFormat} from "../../../../utils/NumbFormat";

const Activity = () => {

	let initialState = {
		info: [
			{
				title: 'Количество мероприятий',
				value: NumbFormat(8325),
				ruble: false,
				big: false
			},
			{
				title: 'Сумма поддержки',
				value: NumbFormat(687254),
				ruble: true,
				big: false
			},
			{
				title: 'Итоговая сумма комиссии Zelfi',
				value: NumbFormat(1254321),
				ruble: true,
				big: true
			},
			{
				title: 'Сумма проданных билетов',
				value: NumbFormat(5687254),
				ruble: false,
			},
			{
				title: 'Сумма комиссии Zelfi',
				value: NumbFormat(1254321),
				ruble: false,
			},
			{
				title: 'Возвращено',
				value: NumbFormat(210321),
				ruble: true,
				big: true
			}
		],
		items: [
			{
				title: 'Игра в баскетбол',
				free: false
			},
			{
				title: 'Игра в баскетбол',
				free: true
			},
			{
				title: 'Игра в баскетбол',
				free: true
			},
			{
				title: 'Игра в баскетбол',
				free: false
			},
			{
				title: 'Игра в баскетбол',
				free: false
			}
		]
	};

	let [modal, setModal] = useState(false);

	let openModal = () => {
		setModal(true)
	};
	let closeModal = () => {
		setModal(false)
	};

	return (
		<div>
			<ActivityReduxForm/>
			<div className={style.block_1}>
				<BtnSorting title={'Дата с начала периода'}/>
			</div>
			<div className={style.block_2}>
				<InfoWrapBlock items={initialState.info}/>
			</div>
			<div className="inner_1 inner_1_adaptive">
				{initialState.items.map(i => <Item title={i.title} free={i.free} modal={openModal}/>)}
			</div>
			<Modal isOpen={modal} close={closeModal}/>
		</div>
	)
};

export default Activity;