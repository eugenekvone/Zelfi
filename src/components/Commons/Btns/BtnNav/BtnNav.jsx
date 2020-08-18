import React from 'react';
import style from './BtnNav.module.scss';
import cn from "classnames";
import {NavLink} from "react-router-dom";


const BtnNav = ({title, quantity, url, itemUrl, number, typeSecond}) => {
	return (
		<NavLink to={url + itemUrl}
		         activeClassName={style.block_active}
		         className={cn(style.block, typeSecond && style.typeSecond, 'click_reaction')}>
			<div className={style.inner}>
				<p className={cn(style.title, "text-1")}>{title}</p>
				{quantity &&
				<div className={style.item_1}>
					<p className="text-18 text_white">{quantity}</p>
				</div>
				}
			</div>
			{number &&
			<div className={style.item_2}>
				<p className="text-1 text_white">{number}</p>
			</div>
			}
		</NavLink>
	)
};

export default BtnNav;