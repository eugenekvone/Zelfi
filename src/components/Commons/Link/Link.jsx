import React from 'react';
import style from './Link.module.scss';
import cn from "classnames";
import icon from "../../../assets/img/Commons/Link/icon.svg";


const Link = ({title, link}) => {
	return (
		<a href={link} className='flex-ver-center link'>
			<p className="text-7 text_purple text-4_adaptive">{title}</p>
			<img src={icon} alt="icon" className={cn(style.icon, style.icon_big, 'flex-top')}/>
		</a>
	)
};

export default Link;