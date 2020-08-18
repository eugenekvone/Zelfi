import React from 'react';
import style from './Activity.module.scss';
import cn from "classnames";
import BtnBack from "../../../../Commons/Btns/BtnBack/BtnBack";
import Link from "../../../../Commons/Link/Link";
import InfoBlock from "../../../../Blocks/InfoBlock/InfoBlock";
import {NumbFormat} from "../../../../../utils/NumbFormat";


const Activity = ({url}) => {
	return (
		<div className='case'>
			<div className={style.block_1}>
				<BtnBack title={'Мероприятия'} link={url}/>
			</div>
			<div className={cn('item_1', style.block_2, style.block_2__type_1)}>
				<div className={cn('btn btn-2 btn_height-1', style.btn)}>
					<p className="text-7">Список участников</p>
				</div>
				<div>
					<p className={cn("text-16", style.text)}>Количество зарегистрированых:</p>
					<p className="text-16">
						<mark className='text_pink'>100</mark>
						<span>/  Безлимитно</span></p>
				</div>
				<Link link={'/activity'} title={'Показать на странице'}/>
			</div>
			<div className={cn('item_1', style.block_2, style.block_2__type_2)}>
				<div className={cn('btn btn-2 btn_height-1', style.btn)}>
					<p className="text-7">Список участников</p>
				</div>
				<div>
					<p className={cn("text-16", style.text_1)}>Сумма проданных билетов:</p>
					<p className="text-16">
						<mark className='text_pink'>{NumbFormat(1000)} ₽</mark>
						<span>/ {NumbFormat(25000)} ₽</span></p>
				</div>
				<div>
					<p className={cn("text-16", style.text_1)}>Количество проданных билетов:</p>
					<p className="text-16">
						<mark className='text_pink'>50</mark>
						<span>/ 100</span></p>
				</div>
				<Link link={'/activity'} title={'Показать на странице'}/>
			</div>
			<InfoBlock free limitation/>
		</div>
	)
};

export default Activity;