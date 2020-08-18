import React from 'react';
import style from './Statistics.module.scss';
import cn from "classnames";
import StatisticsReduxForm from "./StatisticsForm/StatisticsForm";
import BtnSorting from "../../Commons/Btns/BtnSorting/BtnSorting";
import {PieChart} from 'react-minimal-pie-chart';
import Bar from "../../Commons/Bar/Bar";
import BarAdaptive from "../../Commons/Bar/BarAdaptive";

const Statistics = () => {
	return (
		<div className='case'>
			<StatisticsReduxForm/>
			<div className={style.block_1}>
				<BtnSorting title={'Дата с начала периода'}/>
			</div>
			<div className={style.block_2}>
				<div className={style.block_3}>
					<p className={cn(style.text_1, 'text-7')}>Всего мероприятий</p>
					<p className="text-19 text_pink">223</p>
				</div>
				<div className={style.block_4}>
					<div className="flex-column">
						<p className={cn(style.text_1, 'text-7')}>Платных</p>
						<p className="text-19 text_pink">8 925</p>
					</div>
					<div className="flex-column">
						<p className={cn(style.text_1, 'text-7')}>Куплено билетов</p>
						<p className="text-19 text_pink">123 765</p>
					</div>
					<div className="flex-column">
						<p className={cn(style.text_1, 'text-7')}>Посетило</p>
						<p className="text-19 text_pink">97 436</p>
					</div>
				</div>
				<div className={style.block_4}>
					<div className="flex-column">
						<p className={cn(style.text_1, 'text-7')}>Бесплатных</p>
						<p className="text-19 text_pink">3 698</p>
					</div>
					<div className="flex-column">
						<p className={cn(style.text_1, 'text-7')}>Зарегистрировано</p>
						<p className="text-19 text_pink">39 342</p>
					</div>
					<div className="flex-column">
						<p className={cn(style.text_1, 'text-7')}>Посетило</p>
						<p className="text-19 text_pink">25 985</p>
					</div>
				</div>
			</div>
			<p className={cn(style.text_2, "text-3")}>Мероприятия</p>
			<div className={style.block_8}>
				<div>
					<div className={style.block_5}>
						<p className={cn(style.text_3, "text-7")}>Платные</p>
						<div className={style.block_6}>
							<div className={cn(style.item_1, style.item_1_orange)}></div>
							<p className={cn(style.text_4, "text-1")}>Возвратов по билетам</p>
						</div>
						<div className={style.block_6}>
							<div className={cn(style.item_1, style.item_1_purple_1)}></div>
							<p className={cn(style.text_4, "text-1")}>Куплено</p>
						</div>
					</div>
					<div className={style.block_7}>
						<p className={cn(style.text_3, "text-7")}>Бесплатные</p>
						<div className={style.block_6}>
							<div className={cn(style.item_1, style.item_1_pink)}></div>
							<p className={cn(style.text_4, "text-1")}>Зарегистрированных</p>
						</div>
						<div className={style.block_6}>
							<div className={cn(style.item_1, style.item_1_blue)}></div>
							<p className={cn(style.text_4, "text-1")}>Не посетивших</p>
						</div>
					</div>

				</div>
				<div className={style.pie}>
					<PieChart
						data={[
							{
								color: '#351768',
								title: 'Fourth',
								value: 5678
							},
							{
								color: '#F05757',
								title: 'One',
								value: 576
							},
							{
								color: '#36AFD6',
								title: 'Two',
								value: 829
							},
							{
								color: '#FE2999',
								title: 'Three',
								value: 3698
							}
						]}
						label={({dataEntry}) => dataEntry.value}
						labelPosition={60}
						labelStyle={{
							fontFamily: 'Montserrat-ExtraBold',
							fill: 'white',
							fontSize: '6px'
						}}
					/>
				</div>
			</div>
			<div className={style.block_9}>
				<p className={cn(style.text_5, "text-3")}>Количество мероприятий в месяц</p>
				<div className={style.block_6}>
					<div className={cn(style.item_1, style.item_1_purple_2)}></div>
					<p className={cn(style.text_4, "text-1")}>Платные</p>
				</div>
				<div className={style.block_6}>
					<div className={cn(style.item_1, style.item_1_pink)}></div>
					<p className={cn(style.text_4, "text-1")}>Бесплатные</p>
				</div>
			</div>
			<div className="none_adaptive">
				<Bar/>
			</div>
			<div className='flex-column active_adaptive_flex'>
				<BarAdaptive/>
				<BarAdaptive/>
				<BarAdaptive/>
				<BarAdaptive/>
				<BarAdaptive/>
				<BarAdaptive/>
			</div>
		</div>
	)
};

export default Statistics;