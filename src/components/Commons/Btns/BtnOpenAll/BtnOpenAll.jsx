import React from 'react';
import style from './BtnOpenAll.module.scss';
import cn from "classnames";
import icon from "../../../../assets/img/Commons/Btns/BtnOpenAll/icon.svg";

const BtnOpenAll = ({number, item_id}) => {

	let btn = (
		<div className={cn(style.block, 'btn btn-1 btn_height-3')}>
			<img src={icon} alt="icon" className={style.icon}/>
			<p className="text-1 text_white">{number}</p>
		</div>
	)

	if (item_id) {
		btn = (
			<a href={'activity/' + item_id + '/comments'} className={cn(style.block, 'btn btn-1 btn_height-3')}>
				<img src={icon} alt="icon" className={style.icon}/>
				<p className="text-1 text_white">{number}</p>
			</a>
		)
	}

	return btn
};

export default BtnOpenAll;