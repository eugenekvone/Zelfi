import React from 'react';
import style from './BtnBack.module.scss';
import icon from "../../../../assets/img/Commons/Btns/BtnBack/icon.svg";
import {NavLink} from "react-router-dom";

const BtnBack = ({title, link}) => {
	return (
		<NavLink to={link} className='flex-ver-center click_reaction'>
			<img src={icon} alt="icon" className={style.icon}/>
			<p className="text-1 text-4_adaptive">{title}</p>
		</NavLink>
	)
};

export default BtnBack;