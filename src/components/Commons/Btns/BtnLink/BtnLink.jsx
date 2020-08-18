import React from 'react';
import style from './BtnLink.module.scss';
import cn from "classnames";
import {NavLink} from "react-router-dom";


const BtnLink = ({title, icon, link, block_none, textClass}) => {
	return (
		<NavLink to={link} className={cn(style.btn_link, 'link')}>
			<p className={cn("text-1 text_purple", !block_none && style.text, textClass)}>{title}</p>
			{!block_none &&
			<div className={style.block}>
				<img src={icon} alt="icon"/>
			</div>
			}
		</NavLink>
	)
};

export default BtnLink;