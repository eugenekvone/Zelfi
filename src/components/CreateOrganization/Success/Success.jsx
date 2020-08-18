import React from 'react';
import style from './Success.module.scss';
import cn from "classnames";
import {NavLink} from "react-router-dom";


const Success = () => {
	return (
		<div className="flex-column">
			<p className={cn(style.text, 'text-3 text-5_adaptive')}>Ваша организация создана</p>
			<div className={style.block}>
				<NavLink to='/' className={cn(style.btn, "btn btn-2 btn_height-1")}>
					<p className="text-7">На главную</p>
				</NavLink>
				<NavLink to='/control' className={cn(style.btn, "btn btn-1 btn_height-1")}>
					<p className="text-7 text_white">Управление мероприятиями</p>
				</NavLink>
			</div>
		</div>
	)
};

export default Success;