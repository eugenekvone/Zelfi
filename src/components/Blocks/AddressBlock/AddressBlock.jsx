import React from 'react';
import style from './AddressBlock.module.scss';
import cn from "classnames";
import avatar from "../../../assets/img/initialState/Block_8/avatar.jpg";

const AddressBlock = () => {
	return (
		<div className={style.block}>
			<div className={style.inner}>
				<div className={cn(style.item_1, 'img_center-wrap')}>
					<img src={avatar} alt="avatar" className="img_center-width"/>
				</div>
				<div className={style.item_2}>
					<p className={cn(style.text_1, 'text-3 text-1_adaptive')}>Оставьте отзыв о мероприятии «Чайная
						церемония»</p>
					<p className={cn(style.text_2, 'text-11 none_adaptive')}>21 окт. 2019, 15:00</p>
					<p className='text-11 none_adaptive'>г. Казань, ул. Волкова, д. 7/29</p>
				</div>
			</div>
			<p className={cn(style.text_2, 'text-11 active_adaptive text-1_adaptive')}>21 окт. 2019, 15:00</p>
			<p className='text-11 active_adaptive text-1_adaptive'>г. Казань, ул. Волкова, д. 7/29</p>
		</div>
	)
};

export default AddressBlock;