import React from 'react';
import style from './Title.module.scss';
import cn from "classnames";
import {NavLink} from "react-router-dom";


const Title = ({title, btn_1, btn_2, btn_icon, btn_title, marginNone, link, history}) => {

	let linkItem = '#';
	if (link) linkItem = link;

	const component = () => (
		<div className="flex-ver-center">
			{btn_icon ? <img src={btn_icon} alt="title__btn_icon" className="btn__icon_left"/> : null}
			<p className={cn(btn_1 && 'text_white', "text-7")}>{btn_title}</p>
		</div>
	)

	const classBtn = () => (cn(
		btn_1 && 'btn-1',
		btn_1 && style.btn_1,
		btn_2 && 'btn-2',
		btn_2 && style.btn_2,
		style.btn,
		"btn btn_height-1"
	))

	return (
		<div className={cn(style.title, marginNone && style.title_margin_none)}>
			<h2 className={cn("h2-1", style.text)}>{title}</h2>
			{link &&
			<NavLink to={linkItem} className={classBtn()}>
				{component()}
			</NavLink>
			}
			{history &&
			<div onClick={history.goBack} className={classBtn()}>
				{component()}
			</div>
			}
		</div>
	)
};

export default Title;