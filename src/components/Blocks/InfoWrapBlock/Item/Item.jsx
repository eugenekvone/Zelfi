import React from 'react';
import style from './Item.module.scss';
import cn from "classnames";


const Item = ({value, title, big, ruble}) => {
	return (
		<div className={cn(style.item, big && style.big)}>
			<p className="text-16">{title}:</p>
			<p className={cn(big && style.text, "text-16 text_pink")}>{value}{ruble && ' ₽'}</p>
		</div>
	)
};

export default Item;