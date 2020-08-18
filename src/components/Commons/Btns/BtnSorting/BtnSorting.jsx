import React from 'react';
import style from './BtnSorting.module.scss';
import cn from "classnames";
import icon from "../../../../assets/img/Commons/Btns/BtnSorting/icon.svg";


const BtnSorting = ({title}) => {
	return (
		<div className={cn(style.block, 'click_reaction')}>
			<img src={icon} alt="icon" className={style.icon}/>
			<p className="text-7 text_purple text-4_adaptive">{title}</p>
		</div>
	)
};

export default BtnSorting;