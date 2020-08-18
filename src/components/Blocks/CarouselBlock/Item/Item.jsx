import React from 'react';
import style from './Item.module.scss';
import cn from "classnames";
import icon_1 from "../../../../assets/img/Blocks/Block_2/Item/icon_1.svg";
import icon_2 from "../../../../assets/img/Blocks/Block_2/Item/icon_2.svg";
import icon_3 from "../../../../assets/img/Blocks/Block_2/Item/icon_3.svg";
import {NavLink} from "react-router-dom";
import {NumbFormat} from "../../../../utils/NumbFormat";

const Item = ({name, avatar, points, plice}) => {

	var icon;

	if (plice == 1) icon = icon_1;
	if (plice == 2) icon = icon_2;
	if (plice == 3) icon = icon_3;

	return (
		<NavLink to="/rating" className={cn(style.item, 'link')}>
			<div className={style.block}>
				<div className={cn(style.avatar, 'img_center-wrap')}>
					<img src={avatar} alt="avatar" className="img_center-height"/>
				</div>
				<div className={style.block__inner}>
					{icon ? <img src={icon} alt="icon_1" className={style.icon}/> : null}
					<p className={plice <= 3 ? 'text-9' : 'text-1'}>{plice} место</p>
				</div>
			</div>
			<p className="text-7 block_2__name">{name}</p>
			<p className={cn(style.text_3, "text-1")}><span>{NumbFormat(points)}</span> баллов
			</p>
		</NavLink>
	)
};

export default Item;