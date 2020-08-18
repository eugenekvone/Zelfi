import React from 'react';
import style from './Item.module.scss';
import cn from "classnames";
import AvatarBlock from "../../../Blocks/AvatarBlock/AvatarBlock";
import img_2 from "../../../../assets/img/initialState/Hoc_1/img_2.jpg";


const Item = ({title}) => {
	return (
		<div className={cn(style.item, 'item_1')}>
			<div className={style.block_1}>
				<AvatarBlock text_1={'ООО «Праздник»'}
				             text_2={'21 окт. 2019, 15:00'}
				             img={img_2}
				             size={'big'}
				             text_1_Class='text-3 text-5_adaptive'
				             text_2_Class='text-11 text-1_adaptive'
				             link={'/organization'}/>
				<div className={style.block_3}></div>
			</div>
			<div className={style.block_2}>
				<p className={cn(style.text, "text-19 text_pink")}>235 <span>Z</span></p>
				<p className="text-1">{title}</p>
			</div>
		</div>
	)
};

export default Item;