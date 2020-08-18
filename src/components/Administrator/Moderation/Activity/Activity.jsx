import React, {useState} from 'react';
import style from './Activity.module.scss';
import ActivityReduxForm from "./ActivityForm/ActivityForm";
import BtnSorting from "../../../Commons/Btns/BtnSorting/BtnSorting";
import Item from "./Item/Item";
import Modal from "./Modal/Modal";


const Activity = () => {
	let initialState = {
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
		<div className={style.activity}>
			<ActivityReduxForm/>
			<div className={style.block_1}>
				<BtnSorting title={'Дата создания'}/>
			</div>
			<div className="inner_1">
				{initialState.items.map(i => <Item title={i.title} free={i.free} modal={openModal}/>)}
			</div>
			<Modal isOpen={modal} close={closeModal}/>
		</div>
	)
};

export default Activity;