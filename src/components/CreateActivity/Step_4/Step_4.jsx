import React from 'react';
import style from './Step_4.module.scss';
import cn from "classnames";
import {NavLink} from "react-router-dom";


const Step_4 = () => {
	return (
		<div className="flex-column">
			<p className={cn(style.text, 'text-3 text-4_adaptive')}>
				Ваше мероприятие будет рассмотрено в ближайшее время и опубликовано на сайте.
			</p>
			<div className={style.block}>
				<NavLink to='/' className={cn(style.btn, "btn btn-2 btn_height-1")}>
					<p className="text-7">На главную</p>
				</NavLink>
				<NavLink to='/control' className={cn(style.btn, "btn btn-1 btn_height-1 order_-1_adaptive")}>
					<p className="text-7 text_white">Управление мероприятиями</p>
				</NavLink>
			</div>
		</div>
	)
};

export default Step_4;