import React from 'react';
import style from './SocialBlock.module.scss';
import cn from "classnames";
import icon_1 from "../../../assets/img/Blocks/Block_30/icon_1.svg";
import icon_2 from "../../../assets/img/Blocks/Block_30/icon_2.svg";
import icon_3 from "../../../assets/img/Blocks/Block_30/icon_3.svg";


const SocialBlock = () => {
	return (
		<div className={style.block}>
			<p className={cn(style.item_1, "text-7")}>С помощью аккаунта:</p>
			<div className='flex-ver-center'>
				<a href='#' className={cn(style.item_2, style.item_2_vk, 'link')}>
					<img src={icon_1} alt="icon_1"/>
				</a>
				<a href='#' className={cn(style.item_2, style.item_2_fb, 'link')}>
					<img src={icon_2} alt="icon_2"/>
				</a>
				<a href='#' className={cn(style.item_2, style.item_2_google, 'link')}>
					<img src={icon_3} alt="icon_3"/>
				</a>
			</div>
		</div>
	)
};

export default SocialBlock;