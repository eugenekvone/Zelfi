import React from 'react';
import style from './Paginator.module.scss';
import cn from "classnames";
import icon_1 from "../../../assets/img/Commons/Paginator/icon_1.svg";
import icon_2 from "../../../assets/img/Commons/Paginator/icon_2.svg";


const Paginator = () => {
	return (
		<div className={style.block}>
			<div className={cn(style.btn_nav, 'click_reaction')}>
				<img src={icon_1} alt="icon_1"/>
			</div>
			<div className='flex'>
				<div className={cn(style.btn, style.btn_active, 'click_reaction')}>
					<p className={cn(style.text, style.text_active, "text-1")}>1</p>
				</div>
				<div className={cn(style.btn, 'click_reaction')}>
					<p className={cn(style.text, "text-1")}>2</p>
				</div>
				<div className={cn(style.btn, 'click_reaction')}>
					<p className={cn(style.text, "text-1")}>3</p>
				</div>
			</div>
			<div className={cn(style.btn_nav, 'click_reaction')}>
				<img src={icon_2} alt="icon_2"/>
			</div>
		</div>
	)
};

export default Paginator;