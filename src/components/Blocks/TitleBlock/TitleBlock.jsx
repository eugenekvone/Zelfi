import React from 'react';
import style from './TitleBlock.module.scss';
import cn from "classnames";
import icon from "../../../assets/img/Blocks/Block_16/icon.svg";
import {NavLink} from "react-router-dom";

const TitleBlock = ({title, spanTitle, btn, url}) => {
	return (
		<div className={style.block}>
			<div className={style.icon_wrap}>
				<img src={icon} alt="icon_3"/>
			</div>
			<p className="text-8"><span>{spanTitle}</span> {title}</p>
			{btn &&
			<NavLink NavLink to={url} className={cn(style.btn, "btn btn-1 btn_height-1")}>
				<p className="text-7 text_white">Пропустить</p>
			</NavLink>
			}
		</div>
	)
};

export default TitleBlock;