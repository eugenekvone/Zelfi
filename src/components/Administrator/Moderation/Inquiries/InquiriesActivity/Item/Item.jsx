import React from 'react';
import style from './Item.module.scss';
import cn from "classnames";
import AvatarBlock from "../../../../../Blocks/AvatarBlock/AvatarBlock";
import icon_1 from "../../../../../../assets/img/Elements/check.svg";
import icon_2 from "../../../../../../assets/img/Elements/stop.svg";
import Info from "../../../../../Commons/Info/Info";


const Item = ({img, title, modal}) => {
	return (
		<div className={cn(style.item, 'item_1')}>
			<div>
				<div className={style.block_1}>
					<AvatarBlock img={img} text_1={title} type={'rating'} rating={4} ratingSize={'middle'}/>
				</div>
				<div className={cn('flex-ver-center', style.block_3)}>
					<Info text={'+7 (999) 888-77-66'} item={'phone'} margin_right opacity/>
					<Info text={'example@mail.com'} item={'mail'} opacity/>
				</div>
			</div>
			<p className="text-11">17.12.2019, в 12:34</p>
			<div className={style.block_2}>
				<div className="btn-2 btn btn_height-1" onClick={modal}>
					<div className='btn__icon_left icon_wrap icon_wrap_purple'>
						<img src={icon_1} alt="icon_1"/>
					</div>
					<p className="text-7">Подтвердить</p>
				</div>
				<div className="btn-2 btn btn_height-1 btn_pink">
					<div className='btn__icon_left icon_wrap icon_wrap_pink'>
						<img src={icon_2} alt="icon_2"/>
					</div>
					<p className="text-7">Отклонить</p>
				</div>
			</div>
		</div>
	)
};

export default Item;