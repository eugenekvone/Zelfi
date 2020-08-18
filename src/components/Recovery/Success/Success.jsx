import React from 'react';
import style from './Success.module.scss';
import cn from "classnames";
import {NavLink} from "react-router-dom";


const Success = () => {
	return (
		<div>
			<p className={cn(style.text, "text-3 text-3_adaptive")}>Ваш пароль успешно изменен!</p>
			<div className="form__series form__series-2 form__series-1_adaptive">
				<NavLink to='/' className="btn btn-2 btn_height-1">
					<p className="text-7">Перейти на главную</p>
				</NavLink>
				<NavLink to='/profile' className={cn(style.btn, "btn btn-1 btn_height-1 order_-1_adaptive")}>
					<p className="text-7 text_white">В профиль</p>
				</NavLink>
			</div>
		</div>
	)
};

export default Success;