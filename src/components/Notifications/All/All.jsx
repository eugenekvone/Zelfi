import React from 'react';
import style from './All.module.scss';
import cn from "classnames";
import AppraisalBlock from "../../Blocks/AppraisalBlock/AppraisalBlock";
import img_1 from "../../../assets/img/initialState/Hoc_1/img_1.jpg";
import Item from "./Item/Item";


const All = ({items}) => {
	return (
		<div className="inner_1 inner_1_adaptive">
			<div className={style.block_1}>
				<AppraisalBlock online/>
			</div>
			<div className={cn(style.block_2, 'item_1')}>
				<div className={style.block_3}>
					<div className={cn(style.block_4, 'img_center-wrap')}>
						<img src={img_1} alt="img_1" className="img_center-height"/>
					</div>
					<div>
						<p className={cn(style.text, "text-3")}>Администарция</p>
						<p className="text-11">21 окт. 2019, 15:00</p>
					</div>
				</div>
				<div className={style.block_5}>
					<p className="text-1">Вам необходимо подтвердить свое участие в мероприятии.</p>
				</div>
			</div>
			{items.map(i => <Item title={i}/>)}
		</div>
	)
};

export default All;