import React from 'react';
import style from './Item.module.scss';
import cn from "classnames";


const Item = ({title, active, click}) => {
	return (
		<div className={cn(style.item, active && style.item_active, "btn")} onClick={click}>
			<p className={cn(style.text, "text-7")}>{title}</p>
		</div>
	)
};

export default Item;