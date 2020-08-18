import React from 'react';
import style from './Item.module.scss';
import cn from "classnames";
import AddressBlock from "../../../Blocks/AddressBlock/AddressBlock";
import Rating from "../../../Commons/Rating/Rating";
import {NumbFormat} from "../../../../utils/NumbFormat";


const Item = ({title}) => {
	return (
		<div className={cn(style.block_1, 'item_1')}>
			<div className={style.block_2}>
				<AddressBlock/>
				<div className={style.block_3}>
					<p className={cn(style.text_1, "text-1")}>Сумма отправленных средств</p>
					<p className={cn("text-17 text_pink", style.text_3)}>{NumbFormat(1100)}<span> ₽</span></p>
				</div>
			</div>
			<div className={style.block_4}>
				<div className={style.block_5}>
					<p className={cn(style.text_2, "text-16 text-1_adaptive")}>Ваша оценка мероприятия</p>
					<Rating rating={4} size={'middle'}/>
				</div>
				<div className={style.block_6}>
					<p className="text-1">{title}</p>
				</div>
			</div>
		</div>
	)
};

export default Item;