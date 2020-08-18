import React from 'react';
import style from './Item.module.scss';
import cn from "classnames";
import AvatarBlock from "../../../../Blocks/AvatarBlock/AvatarBlock";
import icon_1 from "../../../../../assets/img/Administrator/Moderation/AccountManagement/Item/icon_1.svg";
import icon_2 from "../../../../../assets/img/Administrator/Moderation/AccountManagement/Item/icon_2.svg";

const Item = ({img, blocked}) => {
	return (
		<div className={cn(style.item, 'item_1')}>
			<AvatarBlock img={img} text_1={'Антон Камолов'}
			             text_2={'Казань'}
			             text_3={'mail@mail.ru'}
			             size={'large'} type={'texts'}/>
			{blocked ?
				<div className={cn('btn btn-2 btn_height-1', style.btn)}>
					<img src={icon_1} alt="icon_1" className='btn__icon_left'/>
					<p className="text-7">Снять блокировку</p>
				</div>
				:
				<div className={cn('btn btn-2 btn_height-1 btn_pink', style.btn)}>
					<img src={icon_2} alt="icon_2" className='btn__icon_left'/>
					<p className="text-7">Заблокировать</p>
				</div>
			}
		</div>
	)
};

export default Item;