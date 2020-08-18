import React from 'react';
import style from './Finish.module.scss';
import cn from "classnames";
import {NavLink} from "react-router-dom";


const Finish = () => {
	return (
		<div className="flex-column">
			<p className={cn(style.text_1, "text-7")}>Вы купили билет на мероприятие «Чайная церемония».</p>
			<p className={cn(style.text_2, "text-1")}>Вы можете найти его в личном кабинете, в
				разделе <span>Мои билеты.</span></p>
			<div className="form__series form__series-2 form__series-1_adaptive">
				<NavLink to="/activity" className="btn-2 btn btn_height-1">
					<p className="text-7">Вернуться к мероприятию</p>
				</NavLink>
				<NavLink to='/profile/my_tickets'
				         className="btn-1 btn btn_height-1 input-item input-item-4 order_-1_adaptive">
					<p className="text-7 text_white">Мои билеты</p>
				</NavLink>
			</div>
		</div>
	)
};

export default Finish;