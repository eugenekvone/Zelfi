import React from 'react';
import style from './CopyEventBlock.module.scss';
import icon from "../../../assets/img/Blocks/Block_11/icon.svg";
import {NavLink} from "react-router-dom";

const CopyEventBlock = ({BtnCopy}) => {
	return (
		<div className={style.block}>
			<NavLink to='/rating' className="btn btn-1 btn_height-1">
				<p className="text-7 text_white">Список участников</p>
			</NavLink>
			{BtnCopy &&
			<div className="btn btn-2 btn_height-1">
				<p className="text-7">Копировать мероприятие</p>
				<img src={icon} alt="icon" className='btn__icon_right'/>
			</div>
			}
		</div>
	)
};

export default CopyEventBlock;