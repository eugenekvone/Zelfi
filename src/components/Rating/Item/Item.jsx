import React from 'react';
import style from './Item.module.scss';
import cn from "classnames";
import AvatarBlock from "../../Blocks/AvatarBlock/AvatarBlock";


const Item = ({img, place, winner}) => {
	return (
		<div className={cn(style.item, winner && style.item_winner)}>
			<div className={style.block_1}>
				<p className={cn("text-33 text-1_adaptive", style.text_1)}>{place}</p>
				<p className="text-11 text-1_adaptive">место</p>
			</div>
			<div className={style.block_2}>
				<AvatarBlock img={img} text_1='Антон Камолов'
				             text_2='Казань'
				             text_2_Class={cn(style.text, 'text-1_adaptive')}
				             text_3='2 750 z'
				             text_3_Class='text-13 text_pink text-1_adaptive'
				             type='texts'
				             content='evenly'/>
				<p className={cn("text-11", style.text_2)}>Казань</p>
			</div>
		</div>
	)
};

export default Item;