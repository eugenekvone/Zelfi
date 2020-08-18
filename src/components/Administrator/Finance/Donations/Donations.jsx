import React from 'react';
import style from './Donations.module.scss';
import cn from "classnames";
import DonationsReduxForm from "./DonationsForm/DonationsForm";
import BtnSorting from "../../../Commons/Btns/BtnSorting/BtnSorting";
import InfoWrapBlock from "../../../Blocks/InfoWrapBlock/InfoWrapBlock";
import Item from "./Item/Item";
import img_1 from "../../../../assets/img/initialState/Donations/img_1.jpg";
import img_2 from "../../../../assets/img/initialState/Donations/img_2.jpg";
import img_3 from "../../../../assets/img/initialState/Donations/img_3.jpg";
import {NumbFormat} from "../../../../utils/NumbFormat";

const Donations = () => {

	let initialState = {
		info: [
			{
				title: 'Итоговая сумма пожертвований',
				value: NumbFormat(1254321),
				ruble: true,
				big: true
			},
			{
				title: 'Сумма комиссии Zelfi:',
				value: NumbFormat(687254),
				ruble: true,
				big: true
			}
		],
		items: [
			{
				title: 'Антон Камолов',
				type: 'organization',
				img_1: img_1,
				img_2: img_2
			},
			{
				title: 'Антон Камолов',
				type: 'event',
				img_1: img_1,
				img_2: img_3
			},
			{
				title: 'Антон Камолов',
				type: 'event',
				img_1: img_1,
				img_2: img_3
			},
			{
				title: 'Антон Камолов',
				type: 'event',
				img_1: img_1,
				img_2: img_3
			},
			{
				title: 'Антон Камолов',
				type: 'organization',
				img_1: img_1,
				img_2: img_2
			},
			{
				title: 'Антон Камолов',
				type: 'event',
				img_1: img_1,
				img_2: img_3
			},
			{
				title: 'Антон Камолов',
				type: 'event',
				img_1: img_1,
				img_2: img_3
			},
			{
				title: 'Антон Камолов',
				type: 'event',
				img_1: img_1,
				img_2: img_3
			}
		]
	};

	return (
		<div className={style.donations}>
			<DonationsReduxForm/>
			<div className={style.block_1}>
				<BtnSorting title={'Дата с начала периода'}/>
			</div>
			<div className={style.block_2}>
				<InfoWrapBlock items={initialState.info}/>
			</div>
			<div className="inner_2">
				{initialState.items.map(i => <Item title={i.title}
				                                   type={i.type}
				                                   img_1={i.img_1}
				                                   img_2={i.img_2}/>)}
			</div>
		</div>
	)
};

export default Donations;