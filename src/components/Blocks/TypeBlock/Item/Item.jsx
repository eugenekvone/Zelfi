import React from 'react';
import style from './Item.module.scss';
import cn from "classnames";
import {NavLink} from "react-router-dom";

const Item = ({icon, icon_active, title, quantity, url, itemUrl, secondType}) => {
	return (
		<NavLink to={url + itemUrl}
		         activeClassName={style.block_active}
		         className={cn(style.block, 'block_9__item click_reaction', secondType && style.block_secondType)}>
			{icon && <img src={icon} className={cn(style.icon, "btn__icon_left")}/>}
			{icon_active && <img src={icon_active} className={cn(style.icon_active, "btn__icon_left")}/>}
			<p className={cn(style.text, "text-7")}>{title}</p>
			{quantity &&
			<div className={style.quantity}>
				<p className="text-1 text_white text-10_adaptive">{quantity}</p>
			</div>
			}
			<div className={style.line}></div>
		</NavLink>
	)
};

export default Item;