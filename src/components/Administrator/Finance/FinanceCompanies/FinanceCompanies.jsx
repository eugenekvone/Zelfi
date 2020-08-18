import React, {useState} from 'react';
import style from './FinanceCompanies.module.scss';
import FinanceCompaniesReduxForm from "./FinanceCompaniesForm/FinanceCompaniesForm";
import InfoWrapBlock from "../../../Blocks/InfoWrapBlock/InfoWrapBlock";
import Item from "./Item/Item";
import img from "../../../../assets/img/initialState/FinanceCompanies/img.jpg";


const FinanceCompanies = () => {

	let initialState = {
		info: [
			{
				title: 'Количество мероприятий',
				value: 8325,
				ruble: false,
				big: false
			},
			{
				title: 'Сумма поддержки',
				value: 687254,
				ruble: true,
				big: false
			},
			{
				title: 'Итоговая сумма комиссии Zelfi',
				value: 1254321,
				ruble: true,
				big: true
			},
			{
				title: 'Сумма проданных билетов',
				value: 5687254,
				ruble: false,
			},
			{
				title: 'Сумма комиссии Zelfi',
				value: 1254321,
				ruble: false,
			},
			{
				title: 'Возвращено',
				value: 210321,
				ruble: true,
				big: true
			}
		],
		items: [
			{
				title: 'ООО «Праздник»',
				img: img,
				contract: true
			},
			{
				title: 'ООО «Праздник»',
				img: img,
				contract: false
			},
			{
				title: 'ООО «Праздник»',
				img: img,
				contract: true
			},
			{
				title: 'ООО «Праздник»',
				img: img,
				contract: true
			},
			{
				title: 'ООО «Праздник»',
				img: img,
				contract: false
			}, {
				title: 'ООО «Праздник»',
				img: img,
				contract: true
			},

		]
	};

	return (
		<div className={style.finance_companies}>
			<FinanceCompaniesReduxForm/>
			<div className={style.block_1}>
				<InfoWrapBlock items={initialState.info}/>
			</div>
			<div className="inner_1">
				{initialState.items.map(i => <Item img={i.img} title={i.title} contract={i.contract}/>)}
			</div>
		</div>
	)
};

export default FinanceCompanies;