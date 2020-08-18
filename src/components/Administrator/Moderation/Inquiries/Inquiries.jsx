import React from 'react';
import style from './Inquiries.module.scss';
import InquiriesReduxForm from "./InquiriesForm/InquiriesForm";
import SortingBlock from "../../../Blocks/SortingBlock/SortingBlock";
import Item from "./Item/Item";


const Inquiries = ({itemLink}) => {

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

	return (
		<div>
			<InquiriesReduxForm/>
			<div className={style.block}>
				<SortingBlock title={'Дата создания'}/>
			</div>
			<div className="inner_1">
				{initialState.items.map(i => <Item title={i.title} free={i.free} itemLink={itemLink}/>)}
			</div>
		</div>
	)
};

export default Inquiries;